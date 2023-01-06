import NavBar from "./NavBar";
import Modal from "./Modal";

const Home = () => {
  return (
    // <div className="container">
    //     <div className="cookie-bar__inner">
    //     <div className="cookie-bar__text rte"><p>Debes tener la edad legal permitida del consumo de bebidas alcoholicas.</p></div><button type="button" className="cookie-bar__button button button--secondary" data-action="accept-terms">To accept</button></div>
    // </div>
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(false)}
      >
        Open regular modal
      </button> */}
      <NavBar></NavBar>
      <Modal></Modal>
    </>
  );
}
export default Home;