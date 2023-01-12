import NavBar from "../Navbar/NavBar";
import Modal from "../Modal";
import Footer from "../Footer/Footer";
import styles from "../../assets/style/styles.module.css"
import WineLet from "../../assets/img/wineHome.svg"
import HomePr from "../../assets/img/HomeProv.svg"
import BgProd from "../../assets/img/bgProduct.svg"
const Home = () => {
  return (
    <>

      <div className="bg-bg-body min-h-screen">
        <NavBar></NavBar>
        <div className="w-full flex flex-col items-center gap-6 py-6">
          <HomePr />
          <div className="w-11/12 h-1/2 flex flex-col justify-center items-center">
          </div>
          <div className="w-full flex justify-around items-center">
            <a href="/products/type/reds" className={`flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600 bg-cover bg-no-repeat bg-center ${styles.bgReds}`}></a>
            <a href="/products/type/whites" className={`flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600 bg-cover bg-no-repeat bg-center ${styles.bgWhites}`}></a>
            <a href="/products/type/rose" className={`flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600 bg-cover bg-no-repeat bg-center ${styles.bgPinks}`}></a>
            <a href="/products/type/sparkling" className={`flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600 bg-cover bg-no-repeat bg-center ${styles.bgSpark}`}></a>
            <a href="/products/type/dessert" className={`flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600 bg-cover bg-no-repeat bg-center ${styles.bgDessert}`}></a>
          </div>
          <div className="w-full flex justify-around items-center">
            <p className="flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600" >REDS</p>
            <p className="flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600" >WHITES</p>
            <p className="flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600" >PINKS</p>
            <p className="flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600" >SPARKLING</p>
            <p className="flex items-center justify-center w-32 h-32 rounded-full text-lg font-montserrat text-gray-600" >DESSERT</p>
          </div>
          <div className="bg-bg-body min-h-screen">
            <div className="flex h-full w-6/6 self-center justify-self-end">
              <WineLet /> <BgProd />


            </div>
          </div>
          <button className="p-2 border border-gray-600 w-2/10 self-center justify-self-end text-gray-600 mt-8">TASTE IT</button>
          <button className="p-2 border border-gray-600 w-2/10 self-center justify-self-end text-gray-600 mt-8">EXPLORE MORE</button>

        </div>
      </div>
      <Footer></Footer>

    </>
  );
}
export default Home;