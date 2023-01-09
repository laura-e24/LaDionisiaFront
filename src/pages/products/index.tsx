import { useState } from "react";
import NavBar from "../../components/NavBar";
import Wines from "../../components/dashboard/Wines";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";

export default function index({ wines }) {
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
            <Pagination
                onPageChange={onPageChange}
                wines={wines}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div className="w-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8">
                {
                    currentItems.map((wine) => (
                        <Card wine={wine} setSelectedProduct={undefined}></Card>
                    ))
                }
            </div>

        </>
    )
}
export async function getServerSideProps() {
    const response = await fetch('http://localhost:3001/products/')
    const wines = await response.json()
    return {
        props: {
            wines,
        },
    }
}