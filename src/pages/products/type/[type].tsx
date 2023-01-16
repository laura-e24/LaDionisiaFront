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

  const itemsPerPage = 24
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem);
  const onPageChange = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div className="
    main-body  
    pt-12 
    mb-12 
    m-auto
    min-h-screen
    max-w-screen-xl
    bg-bg-body 
    ">
      <NavBar></NavBar>
      <div className="flex flex-col p-4 bg-bg-body">
        <div className="
    w-full 
    flex 
    justify-around 
    items-center 
    mt-8
    wine-types
  ">
          <a href='/products/type/rose' className="rose text-center font-montserrat text-gray-600">
            <div className='w-32 h-32 relative mb-2'>
              <Image src="/assets/rose.png" layout='fill' />
            </div>
            Rose
          </a>
          <a href='/products/type/whites' className="white text-center font-montserrat text-gray-600">
            <div className='w-32 h-32 relative mb-2'>
              <Image src="/assets/white.png" layout='fill' />
            </div>
            White
          </a>
          <a href='/products/type/reds' className="red text-center font-montserrat text-gray-600">
            <div className='w-32 h-32 relative mb-2'>
              <Image src="/assets/red.png" layout='fill' />
            </div>
            Red
          </a>
          <a href='/products/type/sparkling' className="sparkling text-center font-montserrat text-gray-600">
            <div className='w-32 h-32 relative mb-2'>
              <Image src="/assets/sparkling.png" layout='fill' />
            </div>
            Sparkling
          </a>
          <a href='/products/type/dessert' className="dessert text-center font-montserrat text-gray-600">
            <div className='w-32 h-32 relative mb-2'>
              <Image src="/assets/dessert.png" layout='fill' />
            </div>
            Dessert
          </a>
        </div>
        {wines && wines[0]?.error && (<div className="text-center"><p className="text-9xl font-bold">Product not found</p></div>)}
        {filteredWines.length &&
          <div className="w-full h-full flex flex-wrap self-center justify-center gap-y-8">
            {
              currentItems.map((wine) => (
                <Card wine={wine}></Card>
              ))
            }
          </div>
        }
      </div>
      <Pagination
        onPageChange={onPageChange}
        wines={filteredWines}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  )
}