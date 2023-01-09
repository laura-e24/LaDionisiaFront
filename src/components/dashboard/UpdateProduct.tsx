import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
const UpdateProduct = ({ handleCloseModal, selectedProduct }) => {
    const [input, setInput] = useState(selectedProduct)
    const router = useRouter();

    async function updateProduct(product) {
        const response = await axios.put(`${process.env.RESTURL_PRODUCTS}/products/${product.id}`, product);
        // console.log(response.status);
        response.status = 200 && handleCloseModal()
        alert('this is ok!')
        router.push("/dashboard/products");
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        updateProduct(input)
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    }
    console.log(input)
    return (
        <>
            <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-2/4 mt-2 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-black ">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                            <p className="text-lg text-center font-semibold">
                                Product | {input.wine}
                            </p>
                        </div>
                        {/*body*/}
                        <form className="bg-white shadow-md rounded px-6 pt-6 pb-8 dark:bg-black " onSubmit={(e) => handleOnSubmit(e)}>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" value={input.wine} id="wine" type="text" onChange={handleChange} name="wine" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Description
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="description" value={input.description} onChange={handleChange} name="description" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Winery
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="winery" value={input.winery} type="text" onChange={handleChange} name="winery" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Year
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" value={input.year} onChange={handleChange} name="year" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Country
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="country" value={input.country} type="text" onChange={handleChange} name="country" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Region
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="region" value={input.region} type="text" onChange={handleChange} name="region" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Image
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="image" value={input.image} type="text" onChange={handleChange} name="image" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Rating
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="rating" value={input.rating} type="text" onChange={handleChange} name="rating" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Type
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="type" value={input.type} type="text" onChange={handleChange} name="type" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Disabled
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="disabled" value={input.disabled} type="text" onChange={handleChange} name="disabled" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Featured
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="featured" value={input.featured} type="text" onChange={handleChange} name="featured" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    OnSale
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="onSale" value={input.onSale} type="text" onChange={handleChange} name="onSale" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    TotalSalesCurrent
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="totalSalesCurrent" value={input.totalSalesCurrent} type="text" onChange={handleChange} name="totalSalesCurrent" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Stock
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="stock" value={input.stock} type="text" onChange={handleChange} name="stock" />
                            </div>
                            <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleCloseModal}>Cancelar
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
