import { useState } from "react";
import NavBar from "../../../components/Navbar/NavBar";
import Pagination from "../../../components/Pagination";
import Card from "../../../components/Card/Card";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { selectAllWines, selectAllWinesStatus, getAllWinesByContry, selectAllWinesByContry, selectAllWinesCountryStatus, setCurrentWines, selectCurrentWines, selectCountryFilter, cleanUpState, selectAllWinesFilters, getRegiones, filterByScore, selectAllFilters } from "../../../features/products/productsSlice";
import { useEffect } from "react";
import { EStateGeneric, filterWines } from "../../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer/Footer";
import Image from "next/image";
import Filters from "../../../components/Filters/Filters";

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
        <Filters/>
        {winesCountry && winesCountry[0]?.error && (<div className="text-center"><p className="text-9xl font-bold">Product not found</p></div>)}
        {filteredWines.length > 0 &&
          <div className="w-full h-full flex flex-wrap self-center justify-center gap-y-8">
            {
              currentItems.map((wine) => (
                <Card key={wine.id} wine={wine}></Card>
              ))
            }
          </div>
        }
        {!filteredWines.length &&
          <div className="w-full h-full flex flex-wrap self-center justify-center gap-y-8">
            <h1 className="w-96 h-96">PRODUCTS NOT FOUND</h1>
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





// import { useState } from "react";
// import NavBar from "../../../components/Navbar/NavBar";
// import Pagination from "../../../components/Pagination";
// import Card from "../../../components/Card/Card";
// import { useAppDispatch } from "../../../app/store";
// import { useSelector } from "react-redux";
// import { getAllWines, selectAllWines, selectAllWinesStatus } from "../../../features/products/productsSlice";
// import { useEffect } from "react";
// import { EStateGeneric } from "../../../utils/general";
// import { useRouter } from "next/router";
// import Footer from "../../../components/Footer/Footer";

// export default function index() {
//   const router = useRouter()
//   const dispatch = useAppDispatch()
//   const wines = useSelector(selectAllWines)
//   const winesStatus = useSelector(selectAllWinesStatus)

//   useEffect(() => {
//     const fetchData = async () => {
//       if (router.isReady) {
//         if (winesStatus === EStateGeneric.IDLE) {
//           await dispatch(getAllWines());
//         }
//       }
//     }
//     fetchData()
//   }, [])

//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 21;

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = wines.slice(indexOfFirstItem, indexOfLastItem);
//     const onPageChange = (event) => {
//         setCurrentPage(Number(event.target.id));
//     };

//     // console.log()
//     return (
//         <>
//             <NavBar></NavBar>
//             <div className="flex flex-col p-4 bg-bg-body">
//                 <div className="w-full flex justify-around items-center">
//                     <div className="flex flex-col items-center">
//                         <a href="/products/type/reds" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://www.akros.gr/media/23088.jpg')] bg-cover"></a>REDS
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <a href="/products/type/whites" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://sonomawinegarden.com/wp-content/uploads/2022/07/Popular-Types-of-White-Wine.jpg')] bg-cover bg-no-repeat bg-center"></a>WHITES
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <a href="/products/type/rose" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://cdn.shopify.com/s/files/1/0589/7882/8473/products/Vanderpump-930CroppedIII_540x.jpg?v=1653057805')] bg-cover bg-no-repeat bg-center"></a>ROSE
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <a href="/products/type/sparkling" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://1.bp.blogspot.com/-RJbKZ7oWMiI/WB02n2TQNjI/AAAAAAAAMe0/zlvt1Q-zn-8Yof0V_bst-gwTZSIIhmdAACLcB/s1600/Beauty%2B-%2BCarta%2BNevada%2BBrut%2B.jpg')] bg-cover bg-no-repeat bg-center"></a>SPARKLING
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <a href="/products/type/dessert" className="flex items-center justify-center w-32 h-32 rounded-full text-black py- px-8 bg-btn-color text-center bg-[url('https://www.bordeaux.com/wp-content/uploads/2017/06/red.jpg')] bg-cover bg-no-repeat bg-center"></a>DESSERT
//                     </div>
//                 </div>
//                 <div className="w-full h-full flex flex-wrap self-center justify-center gap-y-8 flex-row odd:flex-row-reverse">
//                     {
//                         currentItems.map((wine) => (
//                             <Card wine={wine}></Card>
//                         ))
//                     }
//                 </div>
//             </div>
//             <Pagination
//                 onPageChange={onPageChange}
//                 wines={wines}
//                 itemsPerPage={itemsPerPage}
//                 currentPage={currentPage}
//                 setCurrentPage={setCurrentPage}
//             />
//             <Footer></Footer>
//         </>
//     )
// }
