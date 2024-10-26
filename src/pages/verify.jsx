import React, {useCallback, useContext, useEffect} from 'react';
import {ShopContext} from "../context/shopContext.jsx";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

function Verify() {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const verifyPayment = async () => {
        try {
            if (token) {
                return null;
            }

            const response = await axios.post(backendUrl + '/api/order/verify', {})

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        verifyPayment();
    }, [token]);

    return (
        <div>

        </div>
    );
}

export default Verify;