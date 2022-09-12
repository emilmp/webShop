import { get, update } from "../services/ordersService";
import { useState, useEffect } from "react";
import { FaCheck } from 'react-icons/fa';


const MarkAsCompleteButton = (data) => {
    const [order, setOrder] = useState(null)

    const getOrder = () => {
        let getOrder = get(data.id);
        getOrder.then(function(res){
            setOrder(res.data);
        });
    }

    useEffect(() => {
        if(order) {
            update(data.id, 
                {
                    buyer: order.buyer,
                    products: order.products,
                    completed:true
                }
            )
        }
    }, [order]);

    const markAsComplete = () => { 
        getOrder();
        
       /* let updateOrder = update(order._id, 
            {
                _id:order._id,
                buyer: order.buyer,
                products: order.products,
                completed:true
            }
        )
        getOrder().then(updateOrder);*/
    };
    /*useEffect(() => {
        //console.log(order);
    }, [order]);*/

    return (
            <button className="markAsCompleteBtn" onClick={() => {markAsComplete()}}>
                <FaCheck/>
            </button>
        )
        
}

export default MarkAsCompleteButton;