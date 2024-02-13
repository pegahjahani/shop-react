import { createContext , useState} from "react";



export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{
    const [cartItems , setCartItems] = useState([])

    const addToCart = (_id)=>{
        if(!cartItems?.find((item)=>item.id === _id))
        setCartItems([...cartItems , {id: _id , count : 1}])
    else setCartItems(cartItems.map((item)=>{
        if(item.id ===_id)
        return{...item , count : item.count + 1}
    else return item
    }))
        console.log('cartItems' , cartItems);
    }

    const removeFromCart = (_id)=>{
        setCartItems(cartItems.map((item)=>{
            if(item.id === _id){
                return {...item , count :item.count === 0 ? 0 : item.count - 1}
            }else{return item}
        }))
        console.log('cartItemsrenove' , cartItems);

    }
    
    const contextValue = {cartItems , addToCart , removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}