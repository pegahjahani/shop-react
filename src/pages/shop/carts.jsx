import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Carts = ({ listProducts }) => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className=" col-12 d-flex justify-content-center gap-3  flex-wrap cartStyle">
      {listProducts.map((item) => {
        if (cartItems.some((i) => i.id === item.id && i.count > 0))
          return <div className="showCart col-10 bg-light row">
            <figure className="col-2">
                <img src={item.image} className="col-12"/>
            </figure>
       <div className="col-10 row border">
           <span className="col-12">title :{item.title.slice(0 , 10)}</span>
            <span className="col-12">count :{cartItems?.filter((row) => row.id === item.id)[0]?.count}</span>
            </div>

          </div>;
      })}
    </div>
  );
};