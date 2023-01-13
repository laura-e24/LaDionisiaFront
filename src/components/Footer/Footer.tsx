import { useEffect, useState } from "react";
import Logo from "../../assets/img/logoD.svg"
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

        <footer className={`h-min w-full ${styles.bgfooter} p-14 flex footer`}>

          <Logo className="w-28 h-28"/>

          <div className="absolute fixed left-1/2 -translate-x-1/2 p-2">
          <h1 className="text-xl text-gray-600 pb-2">Contact</h1>
          <p className="text-gray-600  pb-2">ladionisia@gmail.com</p>
          <p className="text-gray-600">+54 111 111 1111</p>
          </div>
        </footer>
    )
}
