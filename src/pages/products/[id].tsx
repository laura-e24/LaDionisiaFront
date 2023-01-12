import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "../../assets/style/styles.module.css"
export default function Product({ wine }) {
  return (
    <div className="bg-bg-body min-h-screen">
      <Navbar></Navbar>
      <div className="w-full flex self-center justify-center">
        <div className="flex flex-col w-1/2 py-28 pl-20">
          <span className="text-xl font-montserrat text-price-color">{wine.winery}</span>
          <p className="text-7xl font-montserrat text-font-color" ><b>{wine.wine}</b></p>
          <p className="text-2xl font-montserrat text-gray-600"><span className="text-price-color">$ {wine.price ? wine.price : 100} </span>rating {wine.rating}/10</p>
          <p className="text-lg font-montserrat text-gray-600">{wine.description}</p>
          <button className="p-2 border border-gray-600 w-2/12 self-center justify-self-end text-gray-600 mt-8">TASTE IT</button>
        </div>
        <div className="w-1/2">
          <div className={`flex h-full w-4/6 items-center justify-center ${styles.bgProduct}`}>
            <img src={wine.image} className="" />
            <img src={wine.image} className="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>

  )
}
export async function getStaticPaths() {
  const res = await axios.get(`${process.env.RESTURL_PRODUCTS}/products`)
  const paths = res.data.map(({ id }) => ({
    params: { id: `${id}` }
  }))
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }) {
  const response = await axios.get(`${process.env.RESTURL_PRODUCTS}/products/` + params.id)
  const wine = response.data
  return {
    props: {
      wine,
    },
  }
}
