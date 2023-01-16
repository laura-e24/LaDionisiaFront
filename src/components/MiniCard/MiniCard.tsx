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
            <div className="w-4/5" key={wine.id}>
                <div className="grid grid-cols-2">
                <div className="w-full h-full flex justify-center">
                        <div className={`flex  w-96 h-96 justify-center items-center`}>
                            <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" />
                            {/* <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" /> */}
                            <p className="text-5xl font-montserrat text-font-color" ><b>{wine.wine}</b></p>
                        </div>
                    </div>
                    <button onClick={counterLess}>
                        -
                    </button>
                    <div>
                        {wineCounter}
                    </div>
                    <button onClick={counterPlus}>
                        +
                    </button>
                    <div className="grid grid-rows-4 p-6 items-center">
                        <p>${SubtotalPrice}</p>
                    </div>
                    <button>
                        Basurero
                    </button>
                    
                </div>
            </div>
        </>
    )
}