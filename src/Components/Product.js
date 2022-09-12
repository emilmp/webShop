import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CartContext from "./CartContext";
import { FaWindowClose } from "react-icons/fa";
import Container from './Styles/Container';
import Alert from "./Styles/Alert";

const Product = (props) =>{
    const cartContext = useContext(CartContext);
    const [product, setProduct] = useState({});
    const [showCartAlert, setShowCartAlert] = useState(false);
    
    const {id} = useParams();

    const addItem = () => {
        cartContext.addToCart(product);
        cartContext.setTotalPrice(Math.round((cartContext.totalPrice+product.price)*100)/100);
        setShowCartAlert(true);
    };

    useEffect(()=>{
        if(showCartAlert){
            setTimeout(function() {
            setShowCartAlert(false)
            }, 5000);
        }
    }, [showCartAlert]);

    const closeAlert = () => {
        setShowCartAlert(false);
    }

    function findProductById(arr, idx) {
        return arr.find((prod) => {
            return prod.id === idx;
        })
    }

    useEffect(() => {
        setProduct(findProductById(props.list, parseInt(id)))
    }, []);
    
    return(
        
        <Container marginTop="2rem" media800pxWidth="100%">
            <img src={product.image} alt="product" id="productImg"></img>
            <div id="productDetails">
                <h2 id="productTitle">{product.title}</h2>
                <p id="productDescription">{product.description}</p>
                <div id="priceCartContent">
                    <p id="productPrice">${product.price}</p>
                    <div id="addToCartBtn" onClick={() => {addItem()} }>ADD TO CART</div>
                </div> 
            </div>
            <div>
                {showCartAlert?<Alert backgroundColor="lightgreen">Added to cart!<FaWindowClose onClick={() => {closeAlert()}} id="closeAlert"/></Alert>:<></>}
            </div>
        </Container>
    )

}



export default Product;