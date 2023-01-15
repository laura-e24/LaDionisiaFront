import { data } from "../../DataExampleForCart/data"

const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
    const onAddProduct = (product) => { 
        if(allProducts.find(item => item.id === product.id)){
            const products = allProducts.map(item => 
                item.id === product.id 
                ? {...item, quantity: item.quantity + 1 }
                : item
                )
                setTotal(total + product.price)
                setCountProducts(countProducts + product.quantity)
                return setAllProducts([...products])
        }
        setTotal(total + product.price)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts, product])
    }

    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    data.map(product => {
                        return (
                            <div key={product.id}>
                                <div>
                                    <img src={product.img} alt={product.nameProduct} width={200} height={200} />
                                </div>
                                <div className='info-product'>
                                    <h2>{product.nameProduct}</h2>
                                    <p className='price'>${product.price}</p>
                                    <button onClick={() => onAddProduct(product)}>
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ProductList