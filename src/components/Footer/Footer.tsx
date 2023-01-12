import { useEffect, useState } from "react";
import Logo from "../../assets/img/logolucho2.svg"
import styles from "../../assets/style/styles.module.css"
export default function Footer() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return (
        <div className={`h-min w-full ${styles.bgfooter}`}>
            <footer className="flex p-4 gap-4 shadow md:px-6 md:py-6 dark:bg-gradient-to-r from-initial-color to-final-color">
                <div className="w-1/4 flex items-center p-4">
                </div>
                <div className="w-2/4 flex gap-4 px-12 items-center">
                    {/* <h2 className="text-xl">Subscribe to Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae dolore autem</p>
                    <form className="flex flex-col">
                        <input className="rounded focus:outline-none focus:ring focus:ring-red-500" type="text" placeholder="write your email..."/><br/>
                        <button type="submit" className="p-2 bg-white text-black w-min self-end">Susbcribe</button>
                    </form> */}
                    <Logo className="w-52 h-52"/>
                    <ul className="text-gray-600">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/products">Products</a></li>
                    </ul>
                </div>
                <div className="w-1/4 flex flex-col gap-2 justify-center">
                    <h1 className="text-xl text-gray-600">Contact</h1>
                    <p className="text-gray-600">ladionisia@gmail.com</p>
                    <p className="text-gray-600">+54 111 111 1111</p>
                </div>
            </footer>

        </div>
    )
}
