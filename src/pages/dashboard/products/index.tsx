import { useEffect, useState } from "react";
import Footer from "../../../components/dashboard/Footer";
import Navbar from "../../../components/dashboard/Navbar";
import Sidebar from "../../../components/dashboard/Sidebar";
import Wines from "../../../components/dashboard/Wines";

export default function Products({wines}) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(false);
    }, []);
    if (isLoading) {
      return null;
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full flex">
                <Sidebar></Sidebar>
                <div className="w-full flex flex-col">
                <Wines wines={wines}></Wines>
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
