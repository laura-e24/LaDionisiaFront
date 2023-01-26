
import { useState } from "react";
import Circles from '../../components/Circles/Circles'
import Card from "../../components/Card/Card";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { getAllWines, selectAllWines, selectAllWinesStatus, selectAllFilters} from "../../features/products/productsSlice";
import { useEffect } from "react";
import { EStateGeneric, filterWines } from "../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/Navbar/NavBar";

export default function index() {
  const filters = useSelector(selectAllFilters)

  const router = useRouter()
  const dispatch = useAppDispatch()
  const wines = useSelector(selectAllWines)
  const winesStatus = useSelector(selectAllWinesStatus)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
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
  }, [winesStatus, filters, wines])
  return (
<>
<NavBar/>
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


<div className="mt-4 mb-10">
<Filters />
</div>

<div className="w-64 m-auto mb-8"><Pagination
    onPageChange={onPageChange}
    wines={filteredWines}
    itemsPerPage={itemsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  /></div>
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
      <h1>PRODUCTS NOT FOUND</h1>
    </>
  }

<div className="w-64 h-30 m-auto mb-8"><Pagination
    onPageChange={onPageChange}
    wines={filteredWines}
    itemsPerPage={itemsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  /></div>

</div><Footer/>
</>)};
