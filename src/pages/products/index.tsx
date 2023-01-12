import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card/Card";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

export default function index({ wines, winesSearch }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = winesSearch ? winesSearch.slice(indexOfFirstItem, indexOfLastItem) : wines.slice(indexOfFirstItem, indexOfLastItem);
    const onPageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    // console.log()
    return (
        <>
            <NavBar></NavBar>
            <div className="flex">
                <div className="w-1/5 flex justify-center">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                    </ul>
                </div>
                <div className="w-4/5 h-full flex flex-wrap self-center justify-center gap-y-8">
                    {
                        currentItems.map((wine) => (
                            <Card wine={wine}></Card>
                        ))
                    }
                </div>
            </div>
            <Pagination
                onPageChange={onPageChange}
                wines={winesSearch ? winesSearch : wines}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Footer></Footer>
        </>
    )
}
export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const { url } = req
    // console.log(search)
    const response = await axios.get(`${process.env.RESTURL_PRODUCTS}/products/`)
    const responseSearch = await axios.get(`${process.env.RESTURL_PRODUCTS}${url}`)
    const wines = response.data
    responseSearch.status === 404
    // console.log(responseSearch.data)
    const winesSearch = responseSearch.data
    return {
        props: {
            wines,
            winesSearch
        },
    }
}