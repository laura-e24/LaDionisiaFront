import { useState } from "react";
import Card from "../../../components/Card/Card"
import NavBar from "../../../components/Navbar/NavBar"
import Pagination from "../../../components/Pagination"
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
export default function Reds({ wines }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = wines.slice(indexOfFirstItem, indexOfLastItem);
    const onPageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    return (
        <>
            <NavBar></NavBar>
            <div className="flex">
                <div className="w-1/5 flex justify-center">
                    {/* <ul>
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
                    </ul> */}
                </div>
                <div className="w-4/5 h-full flex flex-wrap self-center justify-center gap-y-8">
                    {
                        currentItems.map((wine) => (
                            <Card wine={wine} setSelectedProduct={undefined}></Card>
                        ))
                    }
                </div>
            </div>
            <Pagination
                onPageChange={onPageChange}
                wines={wines}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}

            />
            <Footer></Footer>
        </>

    )
}
export async function getStaticPaths() {
    const res = await axios.get(`${process.env.RESTURL_PRODUCTS}/products/`)
    const paths = res.data.map(({ type }) => ({
        params: { type: `${type}` }
    }))
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const response = await axios.get(`${process.env.RESTURL_PRODUCTS}/products/wineTypes/` + params.type)
    const wines = response.data
    return {
        props: {
            wines,
        },

    }
}