import { createContext , useState} from "react";



export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{
    const [cartItems , setCartItems] = useState([])
    const [emptyCart , setEmptyCart] = useState(true)

    const addToCart = (_id)=>{
        if(!cartItems?.find((item)=>item.id === _id))
        setCartItems([...cartItems , {id: _id , count : 1}])
    else setCartItems(cartItems.map((item)=>{
        if(item.id ===_id)
        return{...item , count : item.count + 1}
    else return item
}))
setEmptyCart(false)
    }

    const removeFromCart = (_id)=>{
        setCartItems(cartItems.map((item)=>{
            if(item.id === _id){
                return {...item , count :item.count === 0 ? 0 : item.count - 1}
            }else{return item}
        }))

    }
    
    const contextValue = {cartItems , addToCart , removeFromCart , emptyCart}
    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}