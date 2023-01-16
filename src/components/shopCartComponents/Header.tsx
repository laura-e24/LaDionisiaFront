import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/store"
import { selectCart, removeProduct, removeAllProducts, selectDisplay } from "../../features/products/cartSlice"
import MiniCard from "../MiniCard/MiniCard"


const Header = ({wines}) => {
	const [active, setActive] = useState(false)
	const [TotalPrice, setTotalPrice] = useState(0)
	const dispatch = useAppDispatch()
	const display = useSelector(selectDisplay)
	const cart = useSelector(selectCart)

	const onDeleteProduct = (product) => {
		const result = cart.filter(item => item.id !== product.id)
	}
	useEffect(() => {
		const fetchData = async () => {
			await dispatch(selectCart());
		}
		fetchData()
	  }, [cart])
console.log(cart)

    // if (display) *renderizar* else *no renderizar*
		return (
					<>
						<div className='row-product'>
							{wines.map((e, index) => (
								<MiniCard wine={e}/>
							))}
						</div>
						<button className='btn-clear-all' onClick={() => dispatch(removeAllProducts())}>
							Pagar
						</button>			
						<button className='btn-clear-all' onClick={() => dispatch(removeAllProducts())}>
							Vaciar Carrito
						</button>
						<div className='cart-total'>
							<h3>Total:</h3>
							<span className='total-pagar'>${TotalPrice}</span>
						</div>
					</>
				) }

export default Header