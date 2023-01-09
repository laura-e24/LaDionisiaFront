import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar"
import Sidebar from "../../components/dashboard/Sidebar";

export default function Dashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="h-screen w-full flex">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col">

          <Footer></Footer>
        </div>
      </div>
    </>
  )
}
