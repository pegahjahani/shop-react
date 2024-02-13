import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Products } from "./shop/productList";
import { Carts } from "./shop/carts";
import { NavBar } from "../components/navProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShopContextProvider } from "../context/shopContext";

export const Shoping = () => {
  const selector = useSelector((state) => state.userName);
  const [listProducts, setListProducts] = useState([]);
  const getListProducts = async () => {
    const responseList = await axios.get("https://fakestoreapi.com/products");
    setListProducts(responseList.data)
  };
  useEffect(() => {
    getListProducts();
  } , []);
  return (
    <div>
   <ShopContextProvider>
   <div className="navBar navBarShopping col-12">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Products listProducts={listProducts}/>} />
        <Route path="/Carts" element={<Carts listProducts = {listProducts}/>} />
      </Routes>
   </ShopContextProvider>
    </div>
  );
};
