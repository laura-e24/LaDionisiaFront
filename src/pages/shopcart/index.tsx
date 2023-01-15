import Header from "../../components/shopCartComponents/Header";
import ProductList from "../../components/shopCartComponents/ProductList";
import { useState } from "react";


export default function index(){

    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0) 

    return (
        <>
            <Header
            allProducts = {allProducts}
            setAllProducts = {setAllProducts}
            total = {total}
            setTotal = {setTotal}
            countProducts = {countProducts}
            setCountProducts = {setCountProducts}
            />

            <ProductList
            allProducts = {allProducts}
            setAllProducts = {setAllProducts}
            total = {total}
            setTotal = {setTotal}
            countProducts = {countProducts}
            setCountProducts = {setCountProducts}
            />
        </>
    )
}

