import UpdateProduct from "../../../components/dashboard/UpdateProduct"
import Navbar from "../../../components/dashboard/Navbar";

export default function Product({ wine }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8">
      <img src ={wine.image} alt="" />
      <div className="flex flex-col items-center text-center font-bold mt-10 mb-5">
      <h1>{wine.wine}</h1>
      </div>
      </div>
      <p>$100</p>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      {/* <div className="ec-stars-wrapper">
	<a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
	<a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
	<a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
	<a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
	<a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
  
</div> */}
      <h5>(5 stars) 10 reviews</h5>
      <h5>{wine.description}</h5>
      <p>cantidad</p>
      <button className="flex flex-col items-center text-center8 bg-btn-color text-white py-4 px-8 hover:bg-red-600"  type="button"
      >
        Añadir al carrito
      </button>
      <br />
      <br />
      <button className="fflex flex-col items-center text-center bg-btn-color text-white py-4 px-8 hover:bg-red-600" type="button"
      >
        Añadir a lista de deseos
      </button>
      <div className="mb-3 pt-0">
        <input type="text" placeholder="1" className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
      </div>
      <h1 className = "fw-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8 font-bold mt-10 mb-5" >RESEÑAS Y PUNTUACIONES</h1>
      <h2 className = "fw-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8">Escribi una reseña</h2>
      <div className="mb-3 pt-0">
        <input type="text" placeholder="Escribir..." className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h5 className = "font-bold mt-10 mb-5" >Puntuar</h5>
      <span className="heading"></span>
      <span className="fa fa-star-o"></span>
      <span className="fa fa-star-o"></span>
      <span className="fa fa-star-o"></span>
      <span className="fa fa-star-o"></span>
      <span className="fa fa-star-o"></span>
      <br />
      <button className="fw-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8 bg-btn-color text-white py-4 px-8 hover:bg-red-600"  type="button"
      >
       Enviar
      </button>
    </div>

  )
}
export async function getStaticPaths() {
  try {
    const res = await fetch('http://localhost:3001/products/wineByYear/1999')
    const data = await res.json()
    const paths = data.map(({ id }) => ({
      params: { id: `${id}` }
    }))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error.message)
  }
}

export async function getStaticProps({ params }) {
  const response = await fetch('http://localhost:3001/products/' + params.id)
  const wine = await response.json()
  return {
    props: {
      wine,
    },
  }
}
