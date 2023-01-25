
import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card/Card";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { getAllWines, selectAllWines, selectAllWinesStatus, selectAllWinesCountryStatus, setWinerys } from "../../features/products/productsSlice";
import { useEffect } from "react";
import { EStateGeneric, filterWines } from "../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import Types from "../../components/Types/Types";
import { selectFilters } from "../../features/generalSlice";
import NotFound from "../../components/Errors/NotFound";

export default function index() {
  const filters = useSelector(selectFilters)

  const router = useRouter()
  const dispatch = useAppDispatch()
  const wines = useSelector(selectAllWines)
  const winesStatus = useSelector(selectAllWinesStatus)
  const winesCountryStatus = useSelector(selectAllWinesCountryStatus)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // console.log(wines[0].error)
  const [filteredWines, setFilteredWines] = useState(wines);
  const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem)
  const onPageChange = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (winesStatus === EStateGeneric.IDLE) {
          await dispatch(getAllWines());
        }
      }
    }
    fetchData()
    setFilteredWines(filterWines(wines, filters));
    dispatch(setWinerys(filterWines(wines, filters)))
  }, [winesStatus, filters, wines])
  return (
    <>
      <div className="
 main-body  
 pt-12 
 mb-8
 m-auto
 max-w-screen-xl
 bg-bg-body 
 ">
 <NavBar setCurrentPage={setCurrentPage}></NavBar>
        <Types/>
        <Filters setCurrentPage={setCurrentPage}/>
        {wines && wines[0]?.error && (<div className="text-center">
          <NotFound></NotFound>
        </div>)}
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
            <NotFound />
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

