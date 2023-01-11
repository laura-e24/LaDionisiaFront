import { useEffect, useState } from "react";

export default function Footer() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
      setHasMounted(true);
    }, []);
    if (!hasMounted) {
      return null;
    }
    return (
        <div className="h-min w-full">
            <footer className="flex p-4 gap-4 bg-gradient-to-r from-initial-color to-final-color text-white shadow md:px-6 md:py-6 dark:bg-gradient-to-r from-initial-color to-final-color">
                <div className="w-1/4 flex items-center p-4">
                    <ul className="">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/products">Products</a></li>
                    </ul>
                </div>
                <div className="w-2/4 flex flex-col gap-4 px-12">
                    <h2 className="text-xl">Subscribe to Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae dolore autem</p>
                    <form className="flex flex-col">
                        <input className="rounded focus:outline-none focus:ring focus:ring-red-500" type="text" placeholder="write your email..."/><br/>
                        <button type="submit" className="p-2 bg-white text-black w-min self-end">Susbcribe</button>
                    </form>
                </div>
                <div className="w-1/4 flex flex-col gap-2">
                    <h1 className="text-xl">Contact Information</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitia nulla? Blanditiis, placeat. Dolorum facere cumque iusto voluptatum iste maxime neque quos, ipsa vel porro expedita omnis vero ipsum amet.</p>
                </div>
            </footer>

        </div>
    )
}
