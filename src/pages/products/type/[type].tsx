import { useState } from "react";
import Card from "../../../components/Card/Card"
import NavBar from "../../../components/Navbar/NavBar"
import Pagination from "../../../components/Pagination"
import Footer from "../../../components/Footer/Footer";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { getAllWineTypes, selectAllFilters, selectAllWineTypes, selectAllWineTypesStatus } from "../../../features/products/productsSlice";
import { EStateGeneric, filterWines } from "../../../utils/general";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Filters from "../../../components/Filters/Filters";
import Circles from '../../../components/Circles/Circles'

export default function Reds({ }) {
  const router = useRouter()
  const { type } = router.query;
  const dispatch = useAppDispatch()
  const wines = useSelector(selectAllWineTypes)
  const filters = useSelector(selectAllFilters)
  const winesStatus = useSelector(selectAllWineTypesStatus)
  const [filteredWines, setFilteredWines] = useState(wines);

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (winesStatus === EStateGeneric.IDLE)
          await dispatch(getAllWineTypes(type.toString()));
      }
    }
    fetchData()
    setFilteredWines(filterWines(wines, filters));
  }, [type, wines, filters])

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem);
  const onPageChange = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
<><title>La Dionisia - Wines</title>
<NavBar></NavBar>
<div id="passion-for-wine" className="
  main-body
  home
  mb-8
  m-auto
  max-w-screen-xl
  pb-24
  sm:rounded-2xl	
pt-24
">
 <Circles/>
 <div className="pb-8"></div>
 <Filters/>
 <div className="pb-20"></div>

 {wines && wines[0]?.error && (<div className="text-center"><p className="text-9xl font-bold">Product not found</p></div>)}
  {filteredWines.length > 0 &&
    <>
    {
      currentItems.map((wine) => (
        <Card key={wine.id} wine={wine}></Card>
      ))
    }
    </>
  }
  {!filteredWines.length &&
      <h1>PRODUCTS NOT FOUND</h1>
  }
<Pagination
    onPageChange={onPageChange}
    wines={filteredWines}
    itemsPerPage={itemsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
/>
</div>
<Footer/>
</>)}
