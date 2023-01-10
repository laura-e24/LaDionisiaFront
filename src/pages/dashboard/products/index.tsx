import { useEffect, useState } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/Navbar/NavBar"
import Sidebar from "../../../components/Dashboard/Sidebar";
import Wines from "../../../components/Dashboard/Products/Wines";
import CreateProduct from "../../../components/Dashboard/CreateProduct ";
import { useRouter } from "next/router";
import Navbar from "../../../components/Dashboard/Products/Navbar";
import axios from "axios";
import WinesDisabled from "../../../components/Dashboard/Products/WinesDisabled";

export default function Products({ wines, winesDisabled }) {
  const router = useRouter();
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
    <>
      <NavBar ></NavBar>
      <div className="w-full flex">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col">
          <Navbar handleNewProduct={handleNewProduct} ViewProducts={ViewProducts} ViewProductsDisabled={ViewProductsDisabled}></Navbar>
          {productsEnabled && <Wines wines={wines}></Wines>}
          {productsDisabled && <WinesDisabled winesDisabled={winesDisabled}></WinesDisabled>}
          {newProduct ? (
            <div className="modalC">
              <CreateProduct handleCloseModal={handleCloseModal}></CreateProduct>
            </div>
          ) : null}
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const response = await axios.get(`${process.env.RESTURL_PRODUCTS}/products/`)
  const responseDisabled = await axios.get(`${process.env.RESTURL_PRODUCTS}/products/disabled`)
  const wines = response.data
  const winesDisabled = responseDisabled.data
  return {
    props: {
      wines,
      winesDisabled
    },
  }
}
