import Link from "next/link";
import { useEffect, useState } from "react";
export default function Card({ wine }) {
    const [isLoading, setIsLoading] = useState(true);
    const stars = [];
    const wholeStars = Math.floor(wine.rating / 2);
    const halfStar = wine.rating % 2 !== 1;

    for (let i = 0; i < wholeStars; i++) {
        stars.push('★');
    }
    if (halfStar) {
        stars.push('♦');
    }
    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) {
        return null;
    }
    return (
        <>
            <div className="flex flex-col items-center w-3/12 text-center relative border-l-2" key={wine.id}>
                <Link href={`/products/${wine.id}`}>
                    <div className="flex flex-col items-center text-center gap-6">
                        <img src={wine.image} alt={wine} className="object-scale-down h-3/6" />
                        <h1 className="h-12">{wine.wine}</h1>
                        <p>{stars.join('')}</p>
                        <p>{wine.rating}</p>
                        <h2>$ 100</h2>
                        <button className="bg-btn-color text-white py-4 px-20 hover:bg-red-600">Add to Cart</button>
                    </div>
                </Link>
            </div>
        </>
    )
}


