import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/NavBar"
import Sidebar from "../../components/Dashboard/Sidebar";

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
