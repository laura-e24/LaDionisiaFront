import { useState } from "react";
import NavBar from "../../../components/Navbar/NavBar";
import Pagination from "../../../components/Pagination";
import Card from "../../../components/Card/Card";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { getAllWinesByContry, selectAllWinesByContry, selectAllWinesContryStatus } from "../../../features/products/productsSlice";
import { useEffect } from "react";
import { EStateGeneric } from "../../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer/Footer";
const Filter = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const winesContry = useSelector(selectAllWinesByContry)
    const winesContryStatus = useSelector(selectAllWinesContryStatus)
    const [currentItems, setCurrentItems] = useState([])
    const { filter } = router.query;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 21;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const onPageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    useEffect(() => {
        const fetchData = async () => {
            if (router.isReady) {
                if (winesContryStatus === EStateGeneric.IDLE) {
                    await dispatch(getAllWinesByContry(filter.toString()));
                    setCurrentItems(winesContry.slice(indexOfFirstItem, indexOfLastItem))

                }
            }
        }
        fetchData()
    }, [filter])

    console.log(winesContryStatus)
    console.log(currentItems)
    console.log(filter)
    return (
        <>
            <NavBar></NavBar>
            <div className="flex flex-col p-4 bg-bg-body">
                <div className="w-full flex justify-around items-center">
                    <div className="flex flex-col items-center">
                        <a href="/products/type/reds" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://www.akros.gr/media/23088.jpg')] bg-cover"></a>REDS
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="/products/type/whites" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://sonomawinegarden.com/wp-content/uploads/2022/07/Popular-Types-of-White-Wine.jpg')] bg-cover bg-no-repeat bg-center"></a>WHITES
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="/products/type/rose" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://cdn.shopify.com/s/files/1/0589/7882/8473/products/Vanderpump-930CroppedIII_540x.jpg?v=1653057805')] bg-cover bg-no-repeat bg-center"></a>ROSE
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="/products/type/sparkling" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://1.bp.blogspot.com/-RJbKZ7oWMiI/WB02n2TQNjI/AAAAAAAAMe0/zlvt1Q-zn-8Yof0V_bst-gwTZSIIhmdAACLcB/s1600/Beauty%2B-%2BCarta%2BNevada%2BBrut%2B.jpg')] bg-cover bg-no-repeat bg-center"></a>SPARKLING
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="/products/type/dessert" className="flex items-center justify-center w-32 h-32 rounded-full text-black py- px-8 bg-btn-color text-center bg-[url('https://www.bordeaux.com/wp-content/uploads/2017/06/red.jpg')] bg-cover bg-no-repeat bg-center"></a>DESSERT
                    </div>
                </div>
                <div className="w-full h-full flex flex-wrap self-center justify-center gap-y-8 flex-row odd:flex-row-reverse">
                    {
                        currentItems.map((wine, index) => (
                            <Card wine={wine} key={index}></Card>
                        ))
                    }
                </div>
            </div>
            <Pagination
                onPageChange={onPageChange}
                wines={winesContry}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Footer></Footer>
        </>
    )
}
export default Filter;