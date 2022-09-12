import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Heading from "./Styles/Heading";
import Pagination from "./Pagination";
import PhotoGallery from "./PhotoGallery";

const ProductList = (props) =>{

    //"constructor" for each product image/link html
    function specificProduct(props) {
        const { id, image, price, title} = props.data;
        return(
            <div className="productContainer">
                <Link to={'/product/'+ id} className="productListItem">
                    <img src={image} alt="product" className="productListImage"></img>
                </Link>
                <h3>{title}</h3>
                <div className="productPriceLinkContainer">
                    <p>${price}</p>
                    <Link to={'/product/'+ id} className="productListLink">View</Link>
                </div>
            </div>
        );
    }

    return(
        <Fragment>
            <PhotoGallery/>
            <Heading>Our products</Heading>
            <Pagination
                    data={props.list}
                    RenderComponent={specificProduct}
                    pageLimit={3}
                    dataLimit={9}
            />
        </Fragment>
    )
}

export default ProductList;