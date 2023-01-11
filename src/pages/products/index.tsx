import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card/Card";
import axios from "axios";

export default function index({ wines, winesSearch }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 21;
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
            <div className="w-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8">
                {
                    currentItems.map((wine) => (
                        <Card wine={wine} setSelectedProduct={undefined}></Card>
                    ))
                }
            </div>
            <Pagination
                onPageChange={onPageChange}
                wines={winesSearch ? winesSearch : wines}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
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