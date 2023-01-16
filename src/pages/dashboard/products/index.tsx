import { useEffect, useState } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/Navbar/NavBar"
import Sidebar from "../../../components/Dashboard/Sidebar";
import Wines from "../../../components/Dashboard/Products/Wines";
import CreateProduct from "../../../components/Dashboard/CreateProduct ";
import { useRouter } from "next/router";
import Navbar from "../../../components/Dashboard/Products/Navbar";
import WinesDisabled from "../../../components/Dashboard/Products/WinesDisabled";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { getAllDisabledWines, getAllWines, selectAllDisabedWinesStatus, selectAllDisabledWines, selectAllWines, selectAllWinesStatus } from "../../../features/products/productsSlice";
import { EStateGeneric } from "../../../utils/general";

export default function Products() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const wines = useSelector(selectAllWines)
  const winesDisabled = useSelector(selectAllDisabledWines)
  const winesStatus = useSelector(selectAllWinesStatus)
  const winesDisabledStatus = useSelector(selectAllDisabedWinesStatus)

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (winesStatus === EStateGeneric.IDLE) {
          await dispatch(getAllWines());
        }
        if (winesDisabledStatus === EStateGeneric.IDLE) {
          await dispatch(getAllDisabledWines());
        }
      }
    }
    fetchData()
  }, [])

  const [isLoading, setIsLoading] = useState(true);
  const [newProduct, setNewProduct] = useState(true);
  const [productsEnabled, setProductsEnabled] = useState(true);
  const [productsDisabled, setProductsDisabled] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    setNewProduct(false);
  }, []);
  if (isLoading) {
    return null;
  }
  function ViewProducts() {
    setProductsEnabled(true)
    setProductsDisabled(false)
  }
  function ViewProductsDisabled() {
    setProductsEnabled(false)
    setProductsDisabled(true)
  }
  function handleNewProduct() {
    setNewProduct(true)
    document.body.classList.add('modalC-open');
  }
  function handleCloseModal() {
    setNewProduct(false)
    document.body.classList.remove('modalC-open');
    router.push("/dashboard/products")
  }

  
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
      <NavBar />
      <div className="w-full flex">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Navbar handleNewProduct={handleNewProduct} ViewProducts={ViewProducts} ViewProductsDisabled={ViewProductsDisabled} />
          {productsEnabled && <Wines wines={wines} />}
          {productsDisabled && <WinesDisabled winesDisabled={winesDisabled} />}
          {newProduct ? (
            <div className="modalC">
              <CreateProduct handleCloseModal={handleCloseModal} />
            </div>
          ) : null}
          <Footer />
        </div>
      </div>
    </div>
  )
}