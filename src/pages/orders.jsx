import React, {useContext} from 'react';
import {ShopContext} from "../context/shopContext.jsx";
import Title from "../components/title.jsx";

function Orders() {

    const {products, currency} = useContext(ShopContext);
    return (
        <div className="border-t pt-16">
            <div className="text-2xl">
                <Title text1={'MY'} text2={'ORDERS'} />
            </div>

            <div className=""> </div>
        </div>
    );
}

export default Orders;