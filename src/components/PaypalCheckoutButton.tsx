import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectCart } from "../features/products/cartSlice"
import { useRouter } from "next/router"
import { bindActionCreators } from "@reduxjs/toolkit"

const PaypalCheckotButton = ({wines}) => {

const [ paidFor, setPaidFor ] = useState(false)
const [ error, setError ] = useState(null)

//const router = useRouter()

//const handleApprove = (orderId) => {
    //call backend function to fullfil order

    //if response is succes:
    //setPaidFor(true)
    //refresh user`s account or suscription status


    //if the response is error:
    //alert("your payment was proccesed successfully, However we are unable to fullfil your purchase please contact us.")


    // if(paidFor){
    //     //display success message, modal or redirect to any other page 
    //     alert("Thank you for your purchase")
    // }

    // if(error){
    //     //display success message, modal or redirect to any other page 
    //     alert("some error has ocurred")
    // }

    const cart = useSelector(selectCart);
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0)

    let product = wines.map(w => {
        return {
           name: w.product.wine,
           quantity: w.quantity.toString(),
           unit_amount: {value: w.product.price.toString(), currency_code: "USD"},
        }
    })

return(
    <PayPalButtons 
        style={{
        layout: "horizontal",
        color: "black",
        }}
    createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [{
                description: "Estos son los detalles de tu compra",
                amount: {
                    currency_code: "USD",
                    value: totalPrice.toString(),
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: totalPrice.toString()
                        }
                    }
                },
                items: product
            },
            ]   
        })
    }}
    onApprove={ async (data, actions) => {
        const order = await actions.order.capture()
        console.log("order", order)
        alert("Thank you for your purchase!")
        //handleApprove(data.orderID)

    }}
    onCancel={() => {
        //display a cancel model or return user to home or cart
        alert("Your payment has been canceled")

        //router.push("/")

        //o cerrar el modal del carrito asi se cancela la orden con el precio total y en caso de agregar otro producto
        //se crea una nueva orden con el precio actualizado
        

    }}
    onError={(err) => {
        console.log("error", err)
    }}
    /> 
)

}

export default PaypalCheckotButton