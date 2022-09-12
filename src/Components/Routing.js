import React, {useState, useEffect} from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import Cart from './Cart';
import Product from './Product';
import ProductList from './ProductList';
import CartContext from './CartContext';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Orders from './Orders';


const Routing = () =>{
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productList, setProductList] = useState([]);

    //fetching data
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((data) => setProductList(data))
            .catch(err => {console.log(err)})
    }, []);

    const checkForDuplicate = (item) => {
        if(cart.find(p => p.id === item.id)){
            return true;
        }
        else{
            return false;
        }
    }

    const removeItem = (e) => {
        const id = e.id;
        // finding correct product by id by filtering it out
        setCart(cart.filter(item => item.id !== id));
        // math.round to 2 decimals
        setTotalPrice(Math.round((totalPrice-(e.price*e.quantity))*100)/100);
    }

    function addToCart(item){
        // if product has no duplicate, add item to cart
        if(!checkForDuplicate(item)){
            const updateCart = [
                ...cart,
                {
                    id:item.id,
                    title:item.title,
                    description:item.description,
                    image:item.image,
                    price:item.price,
                    quantity:1
                }
            ];
            setCart(updateCart);
        }
        // if product is a duplicate, +1 to quantity
        else{
            const objIndex = cart.findIndex(p => p.id === item.id);
            cart[objIndex].quantity += 1;
        }
    }

    //pass functions and variables down to child elements
    const cartHolder = {
        cart,
        addToCart,
        totalPrice,
        setTotalPrice,
        setCart,
        removeItem
    };

    return (
        <CartContext.Provider value={cartHolder}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ProductList list={productList}/>}/>
                    <Route path='/product/:id' element={<Product list={productList}/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartContext.Provider>
    )
}


export default Routing;