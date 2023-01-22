import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { getAllFavorites, createFavorite, deleteFavorite ,deleteAllFavorites,selectAllFilters, getAllWines, selectAllWines, selectAllWinesStatus,selectAllWinesCountryStatus } from "../../features/products/productsSlice";
import { EStateGeneric, filterWines } from "../../utils/general";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";

export default function index() {
    const filters = useSelector(selectAllFilters)
  
    const router = useRouter()
    const dispatch = useAppDispatch()
    const wines = useSelector(selectAllWines)
    const winesStatus = useSelector(selectAllWinesStatus)
    const winesCountryStatus = useSelector(selectAllWinesCountryStatus)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 21;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [filteredWines, setFilteredWines] = useState(wines);
    const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem)
    const onPageChange = (event) => {
      setCurrentPage(Number(event.target.id));
    };
    useEffect(() => {
      const fetchData = async (userId) => {
        if (router.isReady) {
          if (winesStatus === EStateGeneric.IDLE) {
            await dispatch(getAllFavorites(userId));
          }
        }
      }
      setFilteredWines(filterWines(wines, filters));
    }, [winesStatus, filters, wines])
    return (
  
  <>
  <div className="
   main-body  
   pt-12 
   mb-12 
   m-auto
   max-w-screen-xl
   bg-bg-body 
   "><NavBar></NavBar>
    <div className="
      w-full 
      flex 
      justify-around 
      items-center 
      mt-8
      wine-types
    ">
      
    </div>
    <Filters />
    {wines && wines[0]?.error && (<div className="text-center"><p className="text-9xl font-bold">Product not found</p></div>)}
    {wines && !wines[0]?.error && filteredWines.length > 0 &&
      <>
        {
          currentItems.map((wine) => (
            <Card key={wine.id} wine={wine}></Card>
          ))
        }
      </>
    }
    {!filteredWines.length &&
      <>
        <h1>YOU DON'T HAVE FAVORITES</h1>
      </>
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
  </>)};
