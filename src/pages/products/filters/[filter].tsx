import { useState } from "react";
import NavBar from "../../../components/Navbar/NavBar";
import Pagination from "../../../components/Pagination";
import Card from "../../../components/Card/Card";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { selectAllWines, selectAllWinesStatus, getAllWinesByContry, selectAllWinesByContry, selectAllWinesCountryStatus, selectCurrentWines, getRegiones, setWinerys } from "../../../features/products/productsSlice";
import { useEffect } from "react";
import { EStateGeneric, filterWines } from "../../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer/Footer";
import Image from "next/image";
import Filters from "../../../components/Filters/Filters";
import { selectFilters } from "../../../features/generalSlice";
import NotFound from "../../../components/Errors/NotFound";

export default function index({ }) {
  const filters = useSelector(selectFilters)
  const router = useRouter()
  const { filter } = router.query;
  const dispatch = useAppDispatch()
  const winesCountry = useSelector(selectAllWinesByContry)
  const winesCountryStatus = useSelector(selectAllWinesCountryStatus)
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
          await dispatch(getRegiones());
        }
      }
    }
    fetchData()
    setFilteredWines(filterWines(winesCountry, filters));
    dispatch(setWinerys(filterWines(winesCountry, filters)))
  }, [filter, winesCountry, filters])

  return (
    <>
      <div className="
 main-body  
 pt-12 
 mb-8
 m-auto
 max-w-screen-xl
 bg-bg-body 
 "><NavBar setCurrentPage={setCurrentPage}></NavBar>
  <div className="
    w-full 
    flex 
    justify-around 
    items-center 
    mt-8
    wine-types
  ">
          <a href='/products/type/rose'>
            <div className="rose text-center font-montserrat text-gray-600">
              <div className='w-32 h-32 relative mb-2'>
                <Image src="/assets/rose.png" layout='fill' />
              </div>
              Rose
            </div>
          </a>
          <a href='/products/type/whites'>
            <div className="white text-center font-montserrat text-gray-600">
              <div className='w-32 h-32 relative mb-2'>
                <Image src="/assets/white.png" layout='fill' />
              </div>
              White
            </div>
          </a>
          <a href='/products/type/reds'>
            <div className="red text-center font-montserrat text-gray-600">
              <div className='w-32 h-32 relative mb-2'>
                <Image src="/assets/red.png" layout='fill' />
              </div>
              Red
            </div>
          </a>
          <a href='/products/type/sparkling'>
            <div className="sparkling text-center font-montserrat text-gray-600">
              <div className='w-32 h-32 relative mb-2'>
                <Image src="/assets/sparkling.png" layout='fill' />
              </div>
              Sparkling
            </div>
          </a>
          <a href='/products/type/dessert'>
            <div className="dessert text-center font-montserrat text-gray-600">
              <div className='w-32 h-32 relative mb-2'>
                <Image src="/assets/dessert.png" layout='fill' />
              </div>
              Dessert
            </div>
          </a>
        </div>
         <Filters setCurrentPage={setCurrentPage} />
        {winesCountry && winesCountry[0]?.error && (<div className="text-center">
          <NotFound></NotFound>
        </div>)}
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
    </>
  )
}