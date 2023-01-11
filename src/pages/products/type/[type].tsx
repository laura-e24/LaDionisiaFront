import { useState } from "react";
import Card from "../../../components/Card/Card"
import NavBar from "../../../components/Navbar/NavBar"
import Pagination from "../../../components/Pagination"
import Footer from "../../../components/Footer/Footer";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { getAllWineTypes, selectAllWineTypes, selectAllWineTypesStatus } from "../../../features/products/productsSlice";
import { StateGeneric } from "../../../utils/general";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Reds({}) {

  const router = useRouter()
  const { type } = router.query;
  const dispatch = useAppDispatch()
  const wines = useSelector(selectAllWineTypes)
  const winesStatus = useSelector(selectAllWineTypesStatus)

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (winesStatus === StateGeneric.IDLE)
          await dispatch(getAllWineTypes(type.toString()));
      }
    }
    fetchData()
  }, [type])

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
      <Footer />
    </>
  )
}