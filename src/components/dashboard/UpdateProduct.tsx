const UpdateProduct = ({ handleCloseModal, selectedProduct }) => {
    return (
        <>
            <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-2/4 mt-2 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-black ">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                            <p className="text-lg text-center font-semibold">
                                Product | {selectedProduct.wine}
                            </p>
                        </div>
                        {/*body*/} 
                        <form className="bg-white shadow-md rounded px-6 pt-6 pb-8 dark:bg-black ">
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" value={selectedProduct.wine} id="wine" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Description
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="description" value={selectedProduct.description}/>
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Winery
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="winery" value={selectedProduct.winery}/>
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Year
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" value={selectedProduct.year} />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Country
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="country" value={selectedProduct.country} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Region
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="region" value={selectedProduct.region} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Image
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="image" value={selectedProduct.image} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Rating
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="rating" value={selectedProduct.rating} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Type
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="type" value={selectedProduct.type} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Disabled
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="disabled" value={selectedProduct.disabled} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Featured
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="featured" value={selectedProduct.featured} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    OnSale
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="onSale" value={selectedProduct.onSale} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    TotalSalesCurrent
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="totalSalesCurrent" value={selectedProduct.totalSalesCurrent} type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block  text-sm font-bold mb-2">
                                    Stock
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="stock" value={selectedProduct.stock} type="text" />
                            </div>
                            <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleCloseModal}>Cancelar
                                </button>
                                <button
                                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button">Aceptar
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
