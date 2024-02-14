import { createContext , useEffect, useState} from "react";



export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{
    const [cartItems , setCartItems] = useState()
    const [emptyCart , setEmptyCart] = useState(false)
    useEffect(()=>{
        const data = localStorage.getItem('setCartItemInLocalStorage')
        setCartItems(!!JSON.parse(data) ? JSON.parse(data) : [] )
    } , [])
    useEffect(()=>{
        if(cartItems !== undefined)
        localStorage.setItem('setCartItemInLocalStorage' , JSON.stringify(cartItems))
    },[cartItems])
    const clearCarts = ()=>{
        setCartItems()
        localStorage.removeItem('setCartItemInLocalStorage')
        
      }
    const addToCart = (_id)=>{
        if(!cartItems?.find((item)=>item.id === _id))
        setCartItems([...cartItems , {id: _id , count : 1}])
    else setCartItems(cartItems?.map((item)=>{
        if(item.id ===_id)
        return{...item , count : item.count + 1}
    else return item
}))
setEmptyCart(true)

    }

    const removeFromCart = (_id)=>{
        setCartItems(cartItems?.map((item)=>{
            if(item.id === _id){
                return {...item , count :item.count === 0 ? 0 : item.count - 1}
            }else{return item}
        }))

    }
    const contextValue = {cartItems , addToCart , removeFromCart , emptyCart , clearCarts}
    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}