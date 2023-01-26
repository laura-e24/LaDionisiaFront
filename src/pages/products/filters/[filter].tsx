import { useState } from "react";
import NavBar from "../../../components/Navbar/NavBar";
import Pagination from "../../../components/Pagination";
import Card from "../../../components/Card/Card";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { selectAllWines, selectAllWinesStatus, getAllWinesByContry, selectAllWinesByContry, selectAllWinesCountryStatus, setCurrentWines, selectCurrentWines, selectCountryFilter, cleanUpState, selectAllWinesFilters, getRegiones, selectAllFilters } from "../../../features/products/productsSlice";
import { useEffect } from "react";
import { EStateGeneric, filterWines } from "../../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer/Footer";
import Image from "next/image";
import Filters from "../../../components/Filters/Filters";
import Circles from '../../../components/Circles/Circles'

export default function index({ }) {
  const filters = useSelector(selectAllFilters)
  const router = useRouter()
  const { filter } = router.query;
  const dispatch = useAppDispatch()
  const winesCountry = useSelector(selectAllWinesByContry)
  const winesCountryStatus = useSelector(selectAllWinesCountryStatus)
  const wines = useSelector(selectAllWines)
  const currentWines = useSelector(selectCurrentWines)
  const winesStatus = useSelector(selectAllWinesStatus)
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredWines, setFilteredWines] = useState(winesCountry);
  const itemsPerPage = 21;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem)
  const onPageChange = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (winesCountryStatus === EStateGeneric.IDLE) {
          await dispatch(getAllWinesByContry(filter.toString()));
          await dispatch(getRegiones(filter.toString()));
        }
      }
    }
    fetchData()
    setFilteredWines(filterWines(winesCountry, filters));
  }, [filter, winesCountry, filters])

  return (
<>

<NavBar></NavBar>
<div id="passion-for-wine" className="
  main-body
  home
  mb-8
  m-auto
  max-w-screen-xl
  pb-24
  sm:rounded-2xl	
">
  <Circles/>
  <Filters />
  {winesCountry && winesCountry[0]?.error && (<div className="text-center"><p className="text-9xl font-bold">Product not found</p></div>)}
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
</>    
)}
