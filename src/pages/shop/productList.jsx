import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Products = ({ listProducts }) => {
  const {cartItems , addToCart , removeFromCart} = useContext(ShopContext)

  return (
    <div className=" listBox">
      {listProducts &&
        listProducts.map((item) => {
          const itemId = item.id
          const isInCart = cartItems?.some((item)=>item.id === itemId)
          return (
            <div className="itemBox border border-dark" key={item.id}>
              <figure className="imageItem">
                <img src={item.image} />
              </figure>
              <div className="descItem">
                <h2 className="mt-2">
                  <span className="text-primary h5">title:</span>
                  {item.title.slice(0 , 10)}
                </h2>
                <p>
                  <span className="text-primary h5">description :</span>
                  {item.description}
                </p>
                <p>
                  <span className="text-primary h5">category :</span>
                  {item.category}
                </p>
                <p>
                  <span className="text-primary h5">price:</span>
                  {item.price}
                </p>
                <div className="col-12 gap-5 d-flex justify-content-center align-items-center py-2">
                <button className="btn btn-primary btn-sm text-white mb-2" onClick={()=>addToCart(item.id)}>+</button>
                <span>{cartItems?.filter((row) => row.id === item.id)[0]?.count}</span>
                {
                  isInCart && <button className="btn btn-primary btn-sm text-white mb-2" onClick={()=>removeFromCart(item.id)}>-</button>
                 
                }
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
