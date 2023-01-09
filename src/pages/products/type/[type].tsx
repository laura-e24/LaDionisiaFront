import { useState } from "react";
import Card from "../../../components/Card"
import NavBar from "../../../components/NavBar"
import Pagination from "../../../components/Pagination"
import Footer from "../../../components/Footer";
import axios from "axios";
export default function Reds({ wines }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(21);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = wines.slice(indexOfFirstItem, indexOfLastItem);
    const onPageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    };
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