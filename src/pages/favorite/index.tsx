import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { selectAllFilters, selectAllFavorites, selectAllFavoritesStatus, getFavorite, getFavorites } from "../../features/products/productsSlice";
import { EStateGeneric, filterWines } from "../../utils/general";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import CardFavorite from "../../components/Card/CardFavorite";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AllUsersStatus, getAllUsers, selectAllUsers } from "../../features/comments/commentsSlice";
import DontHaveFavorites from "../../components/Errors/DontHaveFavorites";

<title>Favorite</title>
export default function index() {
  const filters = useSelector(selectAllFilters)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const favorites = useSelector(selectAllFavorites)
  const favoritesStatus = useSelector(selectAllFavoritesStatus)
  const usersStatus = useSelector(AllUsersStatus)
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
        if (usersStatus === EStateGeneric.IDLE) {
          await dispatch(getAllUsers());
        }
        if (favoritesStatus === EStateGeneric.IDLE) {
          userExistente ? await dispatch(getFavorites(userExistente?.favorites)) : null
        }
      }
    }
    fetchData()
    setFilteredWines(filterWines(favorites, filters));
  }, [favoritesStatus, filters, favorites, users, userExistente])
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
        <img src="assets/favorites.jpg" />
        <h1 className="font-montserrat text-gray-600 text-3xl mt-8" >YOUR FAVORITES</h1>
        <div className="
      w-full 
      flex 
      justify-around 
      items-center 
      mt-8
      wine-types
    ">
        </div>
        {favorites && !favorites[0]?.error && filteredWines.length > 0 &&
          <>
            {
              currentItems.map((wine) => (
                <CardFavorite key={wine.id} wine={wine}></CardFavorite>
              ))
            }
          </>
        }
        {!filteredWines.length &&
          <>
            <DontHaveFavorites />
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
      <Footer />
    </>)
};
