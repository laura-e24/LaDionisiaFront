import { data } from "../../DataExampleForCart/data"
import { useAppDispatch } from "../../app/store"


const ProductList = ({ cart, countProducts, setCountProducts, total, setTotal }) => {
    const dispatch = useAppDispatch()
   
    const onAddProduct = (product) => { 
        if(cart.find(item => item.id === product.id)){
            const products = cart.map(item => 
                item.id === product.id 
                ? {...item, quantity: item.quantity + 1 }
                : item
                )
                setTotal(total + product.price)
                setCountProducts(countProducts + product.quantity)
                // return setAllProducts([...products])
        }
        setTotal(total + product.price)
        setCountProducts(countProducts + product.quantity)
        
        // setAllProducts([...allProducts, product])
    }

    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    cart.map(product => {
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