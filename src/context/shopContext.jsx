import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  const [emptyCart, setEmptyCart] = useState(false);
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

 useEffect(()=>{
  getUserData();
 } , [userData])
  useEffect(() => {
    getUserData();
    const localDataCarts = JSON.parse(localStorage.getItem("setCartItemInLocalStorage"));
    setCartItems(!!localDataCarts ? localDataCarts : []);
    const localUserData = JSON.parse(localStorage.getItem("setuserData"))
    setData(!!localUserData ? localUserData:{})
  }, []);
  useEffect(() => {
    if (cartItems !== undefined)
      localStorage.setItem(
        "setCartItemInLocalStorage",
        JSON.stringify(cartItems)
      );
  }, [cartItems]);
  const clearCarts = () => {
    setCartItems([]);
    setEmptyCart(false);
    localStorage.removeItem("setCartItemInLocalStorage");
  };
  const logOut = ()=>{
    setData({})
    localStorage.removeItem("setuserData");
    navigate('/')

  }
  const addToCart = (_id, _price) => {
    if (!cartItems?.find((item) => item.id === _id))
      setCartItems([...cartItems, { id: _id, count: 1, price: _price }]);
    else
      setCartItems(
        cartItems?.map((item) => {
          if (item.id === _id)
            return {
              ...item,
              count: item.count + 1,
              price: cartItems?.reduce((prev, current) => {
                return prev + current.price;
              }, _price),
            };
          else return item;
        })
      );
    setEmptyCart(true);
  };

  const removeFromCart = (_id) => {
    setCartItems(
      cartItems?.map((item) => {
        if (item.id === _id) {
          return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
        } else {
          return item;
        }
      })
    );
  };

  const getUserData = async () => {
    const userData = await axios.get("http://localhost:2000/users");
    setUserData(userData.data);
  };

  const login = () => {
    const fullFildData =
      data?.password.trim().length > 0 && data?.userName.trim().length > 0;
    if (fullFildData) {
      userData.filter((item) => {
        console.log(item);
        const copmare_signin_properties =
          data?.userName === item?.userName &&
          data?.password === item?.password;
        if (copmare_signin_properties) {
          navigate("/shoping");
          if(data !== undefined){
              localStorage.setItem("setuserData" , JSON.stringify(data))
            }
            return true;
            setData({ userName: "", password: "" });
        }
      });
    }
    
  };
 



  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    emptyCart,
    clearCarts,
    userData,
    setUserData,
    getUserData,
    login,
    data,
    setData,
    logOut,

    
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
