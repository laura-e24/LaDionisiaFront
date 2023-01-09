import Link from "next/link";
import NewProductLogoBlack from "../../../assets/img/NewWineBlack.svg"
import NewProductLogoWhite from "../../../assets/img/NewWineWhite.svg"
import { useTheme } from "next-themes";

export default function Navbar({ handleNewProduct }) {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="w-full flex justify-between items-center p-2 bg-stone-900/50 my-2">
            <ul className="w-full  flex inline-flex justify-between">
                {/* <li className="px-2">
                    <Link href='/' className="block"></Link>
                </li>
                <li className="px-2">
                    <Link href='/' className="block"></Link>
                </li>
                <li className="px-2">
                    <Link href='/products' className="block"></Link>
                </li> */}
                <li className="px-2">
                    <button className="flex items-center" onClick={() => handleNewProduct()}> {
                        theme === 'light' ? <NewProductLogoBlack className="w-10 h-10" />
                            : <NewProductLogoWhite className="w-10 h-10" />
                    } New Product</button>
                </li>
            </ul>
        </nav>
    )
}
