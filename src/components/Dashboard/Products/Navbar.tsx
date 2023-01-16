import Link from "next/link";
import NewProductLogoBlack from "../../../assets/img/NewWineBlack.svg"
import NewProductLogoWhite from "../../../assets/img/NewWineWhite.svg"
import { useTheme } from "next-themes";

export default function Navbar({ handleNewProduct, ViewProducts, ViewProductsDisabled }) {
    const { theme } = useTheme();
    return (
        <nav className="w-full flex justify-between items-center p-2 bg-pagination-color my-2">
            <ul className="w-full flex inline-flex">
                <li className="px-2">
                    <button className="flex items-center" onClick={() => ViewProducts()}> {
                        theme === 'light' ? <NewProductLogoBlack className="w-10 h-10" />
                            : <NewProductLogoWhite className="w-10 h-10" />
                    } All Products</button>
                </li>
                <li className="px-2">
                    <button className="flex items-center" onClick={() => ViewProductsDisabled()}> {
                        theme === 'light' ? <NewProductLogoBlack className="w-10 h-10" />
                            : <NewProductLogoWhite className="w-10 h-10" />
                    } Disabled Products</button>
                </li>
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
