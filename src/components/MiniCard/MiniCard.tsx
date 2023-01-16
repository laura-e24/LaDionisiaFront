import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../assets/style/styles.module.css"



export default function MiniCard({ wine }) {
    const [isLoading, setIsLoading] = useState(true);
    const [wineCounter, setWineCounter] = useState(1);
    const [SubtotalPrice, setSubtotalPrice] = useState(0);


    const subtotalCalculation = ()=> {
        setSubtotalPrice(wineCounter * 100)
    }

    const counterPlus = ()=> {
        setWineCounter(wineCounter +1)
        setSubtotalPrice(wineCounter * 100)
    }


    const counterLess = () => {
        setWineCounter( wineCounter -1 )
        setSubtotalPrice(wineCounter * 100)
    }

    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) {
        return null;
    }

    return (
        <>
            <div className=" flex p-8" >
               
              
                        <div className="flex">
                            <img src={wine.image} alt={wine.wine} height={20} width={40} />
                            <span className="inline-flex ml-8">
                            <p className="my-auto whitespace-nowrap text-xl font-bold"><b>{wine.wine}</b></p>
                            <span className="inline-flex ml-10 my-auto space-x-6 text-lg">
                              <p className="">{wine.quantity}</p>
                              <button className="text-xl p-2 my-auto " onClick={counterLess}>
                                -
                              </button>
                              <p>{wineCounter}</p> 
                              <button className="text-xl p-2 my-auto " onClick={counterPlus}>
                                  +
                              </button>
                            </span>
                            <p className="my-auto">${SubtotalPrice}</p>
                            <button className="p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button> 
                          </span>
                        </div>
                </div>
           
        </>
    )
}