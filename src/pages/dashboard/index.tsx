import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar"
import Sidebar from "../../components/Dashboard/Sidebar";
import Footer from "../../components/Footer/Footer";

export default function Dashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div className="
    main-body  
    pt-12 
    mb-8 
    m-auto
    min-h-screen
    max-w-screen-xl
    bg-bg-body 
    ">
      <NavBar></NavBar>
      <div className="h-screen w-full flex">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col">

          <Footer/>
        </div>
      </div>
    </div>
  )
}
