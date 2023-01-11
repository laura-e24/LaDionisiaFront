import axios from "axios";

export const getAllProducts = () => axios(`${process.env.RESTURL_PRODUCTS}/products`)
export const getOneProductById = (id: string) => axios(`${process.env.RESTURL_PRODUCTS}/products/${id}`)
 
