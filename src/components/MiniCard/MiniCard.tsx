import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../assets/style/styles.module.css"



export default function MiniCard({ wine }) {
    const [isLoading, setIsLoading] = useState(true);
    const [wineCounter, setWineCounter] = useState(1)
    const [SubtotalPrice, setSubtotalPrice] = useState(0)
    

    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) {
        return null;
    }
    return (
        <>
            <div className="w-4/5" key={wine.id}>
                <div className="grid grid-cols-2">
                <div className="w-full h-full flex justify-center">
                        <div className={`flex  w-96 h-96 justify-center items-center ${styles.bgProduct}`}>
                            <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" />
                            {/* <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" /> */}
                            <p className="text-5xl font-montserrat text-font-color" ><b>{wine.wine}</b></p>
                        </div>
                    </div>
                    <button>
                        -
                    </button>
                    <div>
                        {wineCounter}
                    </div>
                    <button>
                        +
                    </button>
                    <div>
                        {SubtotalPrice}
                    </div>
                    <div className="grid grid-rows-4 p-6 items-center">

                        <p className="text-2xl font-montserrat text-gray-600"><span className="text-price-color">$ {wine.price ? wine.price : 100}</span></p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}