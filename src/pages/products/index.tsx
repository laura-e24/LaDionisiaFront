import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { getAllWines, selectAllWines, selectAllWinesStatus } from "../../features/products/productsSlice";
import { useEffect } from "react";
import { StateGeneric } from "../../utils/general";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const wines = useSelector(selectAllWines)
  const winesStatus = useSelector(selectAllWinesStatus)

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (winesStatus === StateGeneric.IDLE) {
          await dispatch(getAllWines());
        }
      }
    }
    fetchData()
  }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 21;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = wines.slice(indexOfFirstItem, indexOfLastItem);
    const onPageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    return (
      <>
        <NavBar />
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
            <Card key={wine.id} wine={wine} setSelectedProduct={undefined}></Card>
          ))
        }
      </div>
    </>
  )
}