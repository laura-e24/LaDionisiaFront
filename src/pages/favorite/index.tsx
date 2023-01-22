import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { getAllFavorites, createFavorite, deleteFavorite ,deleteAllFavorites,selectAllFilters, getAllWines, selectAllWines, selectAllWinesStatus,selectAllWinesCountryStatus, selectAllFavorites, selectAllFavoritesStatus } from "../../features/products/productsSlice";
import { EStateGeneric, filterWines } from "../../utils/general";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import { useUser } from "@auth0/nextjs-auth0/client";
import { selectAllUsers } from "../../features/comments/commentsSlice";

<title>Favorite</title>
export default function index() {
    const filters = useSelector(selectAllFilters)
  
    const router = useRouter()
    const dispatch = useAppDispatch()
    const favorites = useSelector(selectAllFavorites)
    const favoritesStatus = useSelector(selectAllFavoritesStatus)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 21;
    const { user } = useUser()
    const users = useSelector(selectAllUsers)
    const userExistente = users.find(u => u.email === user?.email)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [filteredWines, setFilteredWines] = useState(favorites);
    const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem)
    const onPageChange = (event) => {
      setCurrentPage(Number(event.target.id));
    };
    useEffect(() => {
      const fetchData = async () => {
        if (router.isReady) {
          if (favoritesStatus === EStateGeneric.IDLE) {
            await dispatch(getAllFavorites(userExistente.id));
          }
        }
      }
      setFilteredWines(filterWines(favorites, filters));
    }, [favoritesStatus, filters, favorites])
    console.log(favorites)
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
    {favorites && favorites[0]?.error && (<div className="text-center"><p className="text-9xl font-bold">Product not found</p></div>)}
    {favorites && !favorites[0]?.error && filteredWines.length > 0 &&
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
