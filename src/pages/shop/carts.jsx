import { React, useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import Button from '@mui/material/Button'


export const Carts = ({ listProducts }) => {
  const { cartItems , emptyCart , clearCarts } = useContext(ShopContext);
  const itemPrice = cartItems?.reduce((prev, current)=>{
    return  prev + current.price

  } , 0)
  console.log('helloo');
  
  return (
    <>
      {  emptyCart===false ?  (
       <div className="cartStyle h-100">
       <h2>your carts is empty !!!</h2>
     </div>
      ): (
        
         <div className=" col-12 d-flex justify-content-center align-items-center gap-3  flex-wrap cartStyle">
         {listProducts?.map((item) => {
           if (cartItems?.some((i) => i.id === item.id && i.count > 0))
             return (
               <div className="showCart col-10 bg-light row" key={item.id}>
                 <figure className="col-2">
                   <img src={item.image} className="col-12" />
                 </figure>
                 <div className="col-10 row">
                   <span className="col-12">
                     title :{item.title.slice(0, 10)}
                   </span>
                   <span className="col-12">
                     count :
                     {cartItems?.filter((row) => row.id === item.id)[0]?.count}
                   </span>
                   <span className="col-12">
                     price :
                     
                    {cartItems?.filter((row) => row.id === item.id)[0]?.price}
                     
                   </span>
                 </div>
               </div>
             );
            })}
           
            <Button style={{backgroundColor:'red',color:'white'}} onClick={clearCarts}>remove carts</Button>
       </div>
      
      )}
     
    </>
  );
};
