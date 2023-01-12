import Link from "next/link";
import { useEffect, useState } from "react";



import { useRouter } from "next/router";
import axios from "axios";
import { useAppDispatch } from "../../app/store";
import { updateWine } from "../../features/products/productsSlice";
import styles from "../../assets/style/styles.module.css"
export default function Card({ wine }) {
  const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(true);
    // const stars = [];
    // const wholeStars = Math.floor(wine.rating / 2);
    // const halfStar = wine.rating % 2 !== 1;

    // for (let i = 0; i < wholeStars; i++) {
    //     stars.push('★');
    // }
    // if (halfStar) {
    //     stars.push('♦');
    // }
    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) {
        return null;
    }

  const disableProduct = async () => {
    const product = {
      id: wine.id,
      disabled: true
    }
    const result = await dispatch(updateWine(product))
    if (updateWine.fulfilled.match(result)) alert('Product Deleted')
    console.log(result)
  }

    const handleClick = () => disableProduct();
    
    function handleEditProduct(product) {
        setSelectedProduct(product);
        document.body.classList.add('modal-open');
    }

    return (
        <>
            <div className="w-4/5" key={wine.id}>
                <div className="grid grid-cols-2">
                    <div className="grid grid-rows-4 p-6 items-center">
                        <span className="text-xl font-montserrat text-price-color w-full">{wine.winery}</span>
                        <p className="text-5xl font-montserrat text-font-color" ><b>{wine.wine}</b></p>
                        <p className="text-2xl font-montserrat text-gray-600"><span className="text-price-color">$ {wine.price ? wine.price : 100}</span></p>
                        <a className="text-black border border-gray-600 hover:bg-red-600 w-28 h-12 p-4" href={`/products/${wine.id}`}>TASTE IT</a>
                    </div>
                    <div className="w-full h-full flex justify-center">
                        <div className={`flex  w-96 h-96 justify-center items-center ${styles.bgProduct}`}>
                            <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" />
                            <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" />


   
   

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// import Link from "next/link";
// import { useEffect, useState } from "react";
// export default function Card({ wine }) {
//     const [isLoading, setIsLoading] = useState(true);
//     // const stars = [];
//     // const wholeStars = Math.floor(wine.rating / 2);
//     // const halfStar = wine.rating % 2 !== 1;

//     // for (let i = 0; i < wholeStars; i++) {
//     //     stars.push('★');
//     // }
//     // if (halfStar) {
//     //     stars.push('♦');
//     // }
//     useEffect(() => {
//         setIsLoading(false);
//     }, []);
//     if (isLoading) {
//         return null;
//     }
//     return (
//         <>
//             <div className="flex items-center w-full text-center relative border-l-2" key={wine.id}>
//                 <div className="flex items-center text-center gap-6">
//                     <div className="flex flex-col items-start">
//                         <span className="text-xl font-montserrat text-price-color">{wine.winery}</span>
//                         <p className="text-5xl font-montserrat text-font-color" ><b>{wine.wine}</b></p>
//                         <p className="text-2xl font-montserrat text-gray-600"><span className="text-price-color">$ {wine.price ? wine.price : 100}</span></p>
//                         <button className="bg-btn-color text-white py-4 px-20 hover:bg-red-600">Add to Cart</button>
//                     </div>
//                     <div className="flex">
//                         <img src={wine.image} alt={wine} className="object-scale-down h-3/6" />
//                         <img src={wine.image} alt={wine} className="object-scale-down h-3/6" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


