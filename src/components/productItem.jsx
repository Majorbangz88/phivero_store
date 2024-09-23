import React, {useContext} from 'react';
import {ShopContext} from "../context/shopContext.jsx";
import {Link} from "react-router-dom";

function ProductItem(props) {

    const { id, image, name, price } = props;
    const {currency} = useContext(ShopContext);
    return (
        <Link className="text-gray-700 cursor-pointer" to={`/products/${id}`}>
            <div className="overflow-hidden">
                <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt=""/>
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    );
}

export default ProductItem;