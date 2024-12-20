import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Collection from "./pages/collection.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Product from "./pages/product.jsx";
import Cart from "./pages/cart.jsx";
import PlaceOrder from "./pages/placeOrder.jsx";
import Orders from "./pages/orders.jsx";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/footer.jsx";
import SearchBar from "./components/searchBar.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./pages/verify.jsx";

const App = () => {
    return (
        <div className={'px-4 sm:px-[5vw] md:px-[7vw] Ig:px-[7vw] lg:px-[9vw]'}>
            <ToastContainer />
            <NavBar />
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/collection" element={<Collection/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/product/:productId" element={<Product/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/place-order" element={<PlaceOrder/>} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/verify" element={<Verify/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;