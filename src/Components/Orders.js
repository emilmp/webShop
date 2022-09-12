import { useEffect, useState } from "react";
import { list } from "../services/ordersService";
import MarkAsCompleteButton from "./MarkAsCompleteBtn";
import Container from "./Styles/Container";

const Orders = () =>{

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await list();
            if (error) {
                setError(error);
            } else {
                setOrders(data);
                console.log("test");
            }
        }
        fetchData();
    },[]);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Buyer</th>
                        <th>Products</th>
                        <th>Completed</th>
                        <th>Mark as complete</th>
                    </tr>
                </thead>
                <tbody>
                {orders && orders.map((order) => (
                    <tr key={order._id}>
                        <td>{order.buyer}</td>
                        <td>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Id</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {order.products && order.products.map((orderProducts) => (
                                    <tr>
                                        <td>{orderProducts.id}</td>
                                        <td>{orderProducts.quantity}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </td>
                        <td>{String(order.completed)}</td>
                        {!order.completed &&
                        <td><MarkAsCompleteButton id={order._id}/></td>
                        }
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}
export default Orders;