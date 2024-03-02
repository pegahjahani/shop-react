import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
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
              <figure className="imageItem col-3">
                <img src={item.image} className="col-8"/>
              </figure>
              <div className="descItem col-9">
                <h2 className="mt-2">
                  <span className="text-light h5">title:</span>
                  {item.title.slice(0 , 10)}
                </h2>
                <p>
                  <span className="text-light h5">description :</span>
                  {item.description}
                </p>
                <p>
                  <span className="text-light h5">category :</span>
                  {item.category}
                </p>
                <p>
                  <span className="text-light h5">price:</span>
                  {item.price}
                </p>
                <div className="col-12 gap-5 d-flex justify-content-center align-items-center py-2">
                {/* <button className="btn btn-primary btn-sm text-white mb-2" >+</button> */}
               <AddBoxIcon style={{backgroundColor:'#200122' , color:'white'}} onClick={()=>addToCart(item.id , item.price)}/>
                <span>{cartItems?.filter((row) => row.id === item.id)[0]?.count}</span>
                {
                   isInCart && 
                  
                  <IndeterminateCheckBoxIcon style={{backgroundColor:'#200122' , color:'white'}} onClick={()=>removeFromCart(item.id)}/>
                 
                }
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
