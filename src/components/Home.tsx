import NavBar from "./NavBar";
import Modal from "./Modal";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="w-full flex flex-col items-center gap-6 py-6">
        <div className="w-11/12 h-1/2 bg-btn-color text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
          <img className="w-11/12 h-80" src="https://i.pinimg.com/originals/48/a1/c3/48a1c3c3a2c198a7773500c5583ffc9f.jpg"></img>
          <button className="bg-btn-color">button</button>
        </div>
        <div className="w-full flex justify-around items-center">
          <a href="/products/type/reds" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://www.akros.gr/media/23088.jpg')] bg-cover">+ <br /> Reds</a>
          <a href="/products/type/whites" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://sonomawinegarden.com/wp-content/uploads/2022/07/Popular-Types-of-White-Wine.jpg')] bg-cover bg-no-repeat bg-center">+ <br /> Whites</a>
          <a href="/products/type/rose" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://cdn.shopify.com/s/files/1/0589/7882/8473/products/Vanderpump-930CroppedIII_540x.jpg?v=1653057805')] bg-cover bg-no-repeat bg-center">+ <br /> Rose</a>
          <a href="/products/type/sparkling" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://1.bp.blogspot.com/-RJbKZ7oWMiI/WB02n2TQNjI/AAAAAAAAMe0/zlvt1Q-zn-8Yof0V_bst-gwTZSIIhmdAACLcB/s1600/Beauty%2B-%2BCarta%2BNevada%2BBrut%2B.jpg')] bg-cover bg-no-repeat bg-center">+ <br /> Sparkling</a>
          <a href="/products/type/dessert" className="flex items-center justify-center w-32 h-32 rounded-full text-black py- px-8 bg-btn-color text-center bg-[url('https://www.bordeaux.com/wp-content/uploads/2017/06/red.jpg')] bg-cover bg-no-repeat bg-center">+ <br /> Dessert</a>
        </div>
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl">Arrivals</h1>
          <div className="flex w-full justify-center gap-6">
            <div className="w-1/5 bg-btn-color flex flex-col items-center">
              <img src="https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png" alt="" />
              <h1>Name's wine</h1>
              <p>★★★★★</p>
              <p>$ 100</p>
              <button className="">Add to Cart</button>
            </div>
            <div className="w-1/5 bg-btn-color flex flex-col items-center">
              <img src="https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png" alt="" />
              <h1>Name's wine</h1>
              <p>★★★★★</p>
              <p>$ 100</p>
              <button className="">Add to Cart</button>
            </div>
            <div className="w-1/5 bg-btn-color flex flex-col items-center">
              <img src="https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png" alt="" />
              <h1>Name's wine</h1>
              <p>★★★★★</p>
              <p>$ 100</p>
              <button className="">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="w-full flex gap-4">
            <div className="w-1/2 h-60 bg-red-200">
              p
            </div>
            <div className="w-1/2 h-60  bg-btn-color">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ut possimus voluptatem est veniam illo consequatur, omnis sint eum in repudiandae doloremque veritatis optio harum quos, sapiente quibusdam sed perspiciatis?</p>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-1/2 h-60  bg-btn-color">
              p
            </div>
            <div className="w-1/2 h-60 bg-red-200">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ut possimus voluptatem est veniam illo consequatur, omnis sint eum in repudiandae doloremque veritatis optio harum quos, sapiente quibusdam sed perspiciatis?</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      {/* <Modal></Modal> */}
    </>
  );
}
export default Home;