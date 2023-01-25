import Link from "next/link";
import Router from "next/router";
import GenericButton from "../../../components/GenericButton";
import NavBar from "../../../components/Navbar/NavBar";

const Success = () => {
  return (
    <div className="main-body pt-12 m-auto min-h-screen max-w-screen-xl">
      <NavBar />
      <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 400px)' }}>
        
          <div className="bg-white rounded-lg shadow relative">
            <span className="w-full h-20 bg-purple-600 flex rounded-t-lg"></span>
            <span className="flex p-20 text-green-500">
              <i className="fa-solid fa-circle-check text-6xl fill-current mr-6"></i>
              <h1 className="font-bold text-3xl text-center my-auto">Payment successful!</h1>
            </span>
            <div className="flex flex-col px-20 mb-6 w-full space-y-6 font-light text-xl">
              {/* <button className="block border border-black border-opacity-75 px-10 py-6 rounded-xl" onClick={() => Router.push('/products')}>
                Continue exploring
              </button> */}
              <button className="block border border-black border-opacity-75 px-10 py-6 rounded-xl" onClick={() => Router.push('/')}>
                Go back to Home
              </button>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Success;