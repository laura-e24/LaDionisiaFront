import { useEffect, useState } from "react";
import Footer from "../../../components/dashboard/Footer";
import Navbar from "../../../components/dashboard/Navbar";
import Sidebar from "../../../components/dashboard/Sidebar";
import Wines from "../../../components/dashboard/Wines";
import CreateProduct from "../../../components/dashboard/CreateProduct ";
import { useRouter } from "next/router";

export default function Products({ wines }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [newProduct, setNewProduct] = useState(true);
  useEffect(() => {
    setIsLoading(false);
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
        <Sidebar handleNewProduct={handleNewProduct}></Sidebar>
        <div className="w-full flex flex-col">
          <Wines wines={wines}></Wines>
          {newProduct && (
            <div className="modalC">
              <CreateProduct handleCloseModal={handleCloseModal}></CreateProduct>
            </div>
          )}
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3001/products/wineByYear/1999')
  const wines = await response.json()
  return {
    props: {
      wines,
    },
  }
}
