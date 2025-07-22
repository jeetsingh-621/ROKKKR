import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Shop = lazy(() => import('../pages/Shop'));
const Contact = lazy(() => import('../pages/Contact'));
const Cart = lazy(() => import('../pages/Cart'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const Checkout = lazy(() => import('../pages/Checkout'));

const Loader = () => (
  <div className="w-full h-screen flex items-center justify-center text-white text-xl">
    Loading...
  </div>
);

const Mainroutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="*"
          element={
            <h1 className="text-center flex items-center w-full h-screen justify-center bg-black text-3xl text-red-500">
              404 – Page Not Found
            </h1>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Mainroutes;
