import axios from "axios";
import { IProduct } from "../../utils/types";

export const getAllProducts = () => axios(`${process.env.RESTURL_PRODUCTS}/products`)
export const getAllDisabledProducts = () => axios(`${process.env.RESTURL_PRODUCTS}/products/disabled`)
export const getAllProductTypes = (type: string) => axios(`${process.env.RESTURL_PRODUCTS}/products/wineTypes/${type}`)
export const getOneProductById = (id: string) => axios(`${process.env.RESTURL_PRODUCTS}/products/${id}`)
export const getAllProductsByContry = (contry: string) => axios(`${process.env.RESTURL_PRODUCTS}/products/country/${contry}`)


export const createOneProduct = (product: IProduct) => axios.post(`${process.env.RESTURL_PRODUCTS}/products`, product)
export const updateOneProduct = (product: IProduct) => axios.put(`${process.env.RESTURL_PRODUCTS }/products/${product.id}`, product)