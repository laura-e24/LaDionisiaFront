import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/dashboard/Navbar";
import Sidebar from "../../../components/dashboard/Sidebar";
import Wines from "../../../components/dashboard/Wines";
import CreateProduct from "../../../components/dashboard/CreateProduct ";
import { useRouter } from "next/router";
import NavBar from "../../../components/dashboard/products/Navbar";
import axios from "axios";

export default function Products({ wines }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [newProduct, setNewProduct] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    setNewProduct(false);
  }, []);
  if (isLoading) {
    return null;
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
      <Navbar></Navbar>
      <div className="w-full flex">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col">
          <NavBar handleNewProduct={handleNewProduct}></NavBar>
          <Wines wines={wines}></Wines>
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
  const wines = response.data
  return {
    props: {
      wines,
    },
  }
}
