import Header from "../../components/shopCartComponents/Header";
import ProductList from "../../components/shopCartComponents/ProductList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/products/productsSlice"

export default function index(){

    const cart = useSelector(selectCart)
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0) 

    return (
        <>
            <Header
            total = {total}
            setTotal = {setTotal}
            countProducts = {countProducts}
            setCountProducts = {setCountProducts}
            />

            <ProductList
            cart = {cart}
            total = {total}
            setTotal = {setTotal}
            countProducts = {countProducts}
            setCountProducts = {setCountProducts}
            />
        </>
    )
}

