import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { create }from "../services/ordersService";
import CartContext from "./CartContext";
import Container from "./Styles/Container";
import Alert from "./Styles/Alert";


const Cart = () =>{
    const [loginAlert, setLoginAlert] = useState(false);
    const [emptyCartAlert, setEmptyCartAlert] = useState(false);
    const { user } = useAuth0();
    const cartContext = useContext(CartContext);
    const [order, setOrder] = useState({buyer: "", products:[], completed: false});

    
    useEffect(()=>{
        if(loginAlert){
            setTimeout(function() {
            setLoginAlert(false)
            setEmptyCartAlert(false)
            }, 5000);
        }
    }, [loginAlert]);

    const closeAlert = () => {
        setLoginAlert(false);
        setEmptyCartAlert(false);
    }
    const makeOrder = () => {
        console.log(cartContext.cart);
        if(user===undefined){
            setLoginAlert(true);
            return;
        } else if(cartContext.cart.length===0){
            setEmptyCartAlert(true);
        } else {
            setOrder({
                buyer: user.sub,
                products:cartContext.cart,
                completed:false
            });
            cartContext.setCart([]);
            cartContext.setTotalPrice(0);
        }
        
    }

    useEffect(() => {
        if(order.buyer)
        create(order);
    }, [order]);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartContext.cart && cartContext.cart.map((item) => (
                        
                            <tr key={item.id}>
                                <td>
                                    <div>
                                        <img src={item.image} alt="product in cart" id="cartItemImage"/>
                                    </div>
                                </td>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td><button class="removeFromCartBtn" onClick={() => cartContext.removeItem(item)}><FaWindowClose/></button></td>
                            </tr>
                        
                    ))}
                </tbody>
            </table>
            <div id="checkout">
                <p>Total price: ${cartContext.totalPrice}</p>
                <div id="checkoutBtn" onClick={() => {makeOrder()}}>To checkout</div>
            </div>
            <div>
                {loginAlert?<Alert backgroundColor="red">Please log in.<FaWindowClose onClick={() => {closeAlert()}} id="closeAlert"/></Alert>:<></>}
                {emptyCartAlert?<Alert backgroundColor="red">Cart is empty.<FaWindowClose onClick={() => {closeAlert()}} id="closeAlert"/></Alert>:<></>}
            </div>
        </Container>
    )
}
export default Cart;