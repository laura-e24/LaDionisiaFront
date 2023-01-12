import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch } from '../../app/store';
import { updateWine } from '../../features/products/productsSlice';
import { IProduct } from '../../utils/types';
const UpdateProduct = ({ handleCloseModal, selectedProduct }) => {

  const dispatch = useAppDispatch()

     const [input, setInput] = useState({
        ...selectedProduct,
        disabled: selectedProduct.disabled === true ? true : false,
        featured: selectedProduct.disabled === true ? true : false,
        onSale: selectedProduct.disabled === true ? true : false,
    })

    const router = useRouter();

    const updateProduct = async (product: IProduct) => {
      const result = await dispatch(updateWine(product))
      if (updateWine.fulfilled.match(result)) alert('Product Updated')
      console.log(result)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        updateProduct(input)
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
        if (name === "disabled" || name === "featured" || name === "onSale") setInput({ ...input, [name]: input[name] === false ? true : false });
    }

    return (
        <>
            <div className="my-6 justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-2/4 mt-2 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-black ">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                            <p className="text-lg text-center font-semibold flex">
                                New Product | {input.wine}
                            </p>
                        </div>
                        {/*body*/}
                        <form className="flex flex-wrap gap-4 bg-white shadow-md rounded px-6 pt-6 pb-8 dark:bg-black justify-center" onSubmit={(e) => handleOnSubmit(e)}>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-min py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" value={input.wine} id="wine" type="text" onChange={handleChange} name="wine" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Winery
                                </label>
                                <input className="shadow appearance-none border rounded w-min py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="winery" value={input.winery} type="text" onChange={handleChange} name="winery" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Year
                                </label>
                                <input className="shadow appearance-none border rounded w-24 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="year" type="number" value={input.year} onChange={handleChange} name="year" />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-bold mb-2 ">
                                    Description
                                </label>
                                <textarea className="h-full shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline " id="description" value={input.description} onChange={handleChange} name="description" />
                            </div>
                            <div className="mb-4 ">
                                <label className="block  text-sm font-bold mb-2">
                                    Country
                                </label>
                                <input className="shadow appearance-none border rounded w-48 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="country" value={input.country} type="text" onChange={handleChange} name="country" />
                            </div>
                            <div className="mb-4 ">
                                <label className="block  text-sm font-bold mb-2">
                                    Region
                                </label>
                                <input className="shadow appearance-none border rounded w-48 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="region" value={input.region} type="text" onChange={handleChange} name="region" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    TotalSalesCurrent
                                </label>
                                <input className="shadow appearance-none border rounded w-48 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="totalSalesCurrent" value={input.totalSalesCurrent} type="text" onChange={handleChange} name="totalSalesCurrent" />
                            </div>
                            <div className="mb-4 ">
                                <label className="block  text-sm font-bold mb-2">
                                    Select an option

                                </label>
                                <select name="type" id="type">
                                    <option disabled selected>Type</option>
                                    <option value="reds">Reds</option>
                                    <option value="whites">Whites</option>
                                    <option value="rose">Rose</option>
                                    <option value="sparkling">Sparkling</option>
                                    <option value="dessert">Dessert</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Rating
                                </label>
                                <input className="shadow appearance-none border rounded w-24 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="rating" value={input.rating} type="number" onChange={handleChange} name="rating" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Price
                                </label>
                                <input className="shadow appearance-none border rounded w-24 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="price" value={input.rating} type="number" onChange={handleChange} name="price" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Stock
                                </label>
                                <input className="shadow appearance-none border rounded w-24 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="stock" value={input.stock} type="number" onChange={handleChange} name="stock" />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label className="block  text-sm font-bold mb-2">
                                    Image
                                </label>
                                <div className="mb-4 flex gap-1">
                                    <img src={input.image} alt={input.wine} className="h-48" />
                                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="image" type="file" onChange={handleChange} name="image" />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col items-center">
                                <label className="block  text-sm font-bold mb-2">
                                    Disabled
                                </label>
                                <input checked={input.disabled} className="cursor-pointer w-5 h-5" id="disabled" value={input.disabled} type="checkbox" onChange={handleChange} name="disabled" />
                            </div>
                            <div className="mb-4 flex flex-col items-center">
                                <label className="block  text-sm font-bold mb-2">
                                    Featured
                                </label>
                                <input checked={input.featured} className="cursor-pointer w-5 h-5" value={input.featured} type="checkbox" onChange={handleChange} name="featured" />
                            </div>
                            <div className="mb-4 flex flex-col items-center">
                                <label className="block  text-sm font-bold mb-2">
                                    OnSale
                                </label>
                                <input checked={input.onSale} className="cursor-pointer w-5 h-5" id="onSale" value={input.onSale} type="checkbox" onChange={handleChange} name="onSale" />
                            </div>
                            <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b w-full">
                                <button
                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleCloseModal}>Cerrar
                                </button>
                                <button
                                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit">Aceptar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateProduct;
