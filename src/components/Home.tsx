import NavBar from "./NavBar";
import Modal from "./Modal";
import Footer from "./dashboard/Footer";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="w-full flex flex-col items-center gap-6 py-6">
        <div className="w-11/12 h-1/2 bg-blue-200 text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
          <img className="w-full h-80" src="https://i.pinimg.com/originals/48/a1/c3/48a1c3c3a2c198a7773500c5583ffc9f.jpg"></img>
          <button className="bg-white w-min">button</button>
        </div>
        <div className="w-full flex justify-around items-center">
          <a href="/products/reds" className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-200 text-center">+ <br /> Reds</a>
          <a href="/products/whites" className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-200 text-center">+ <br /> Whites</a>
          <a href="/products/rose" className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-200 text-center bg-[url('https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png')] bg-contain">+ <br /> Rose</a>
          <a href="/products/sparkling" className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-200 text-center bg-[url('https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png')] bg-contain bg-no-repeat bg-center">+ <br /> Sparkling</a>
          <a href="/products/dessert" className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-200 text-center">+ <br /> Dessert</a>
        </div>
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl">Arrivals</h1>
          <div className="flex w-full justify-center gap-6">
            <div className="w-1/5 bg-blue-200 flex flex-col items-center">
              <img src="https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png" alt="" />
              <h1>Name's wine</h1>
              <p>★★★★★</p>
              <p>$ 100</p>
              <button className="">Add to Cart</button>
            </div>
            <div className="w-1/5 bg-blue-200 flex flex-col items-center">
              <img src="https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png" alt="" />
              <h1>Name's wine</h1>
              <p>★★★★★</p>
              <p>$ 100</p>
              <button className="">Add to Cart</button>
            </div>
            <div className="w-1/5 bg-blue-200 flex flex-col items-center">
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
            <div className="w-1/2 h-60 bg-blue-200">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ut possimus voluptatem est veniam illo consequatur, omnis sint eum in repudiandae doloremque veritatis optio harum quos, sapiente quibusdam sed perspiciatis?</p>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-1/2 h-60 bg-blue-200">
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