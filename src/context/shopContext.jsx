import { createContext , useEffect, useState} from "react";



export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{
    const [cartItems , setCartItems] = useState()
    const [emptyCart , setEmptyCart] = useState(false)
   
 
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('setCartItemInLocalStorage'))
        setCartItems(!!(data) ? (data) : [] )
        
    } , [])
    useEffect(()=>{
        if(cartItems !== undefined)
        localStorage.setItem('setCartItemInLocalStorage' , JSON.stringify(cartItems))
    },[cartItems])
    const clearCarts = ()=>{
        setCartItems([])
        setEmptyCart(false) 
        localStorage.removeItem('setCartItemInLocalStorage')
      }
    const addToCart = (_id , _price)=>{
        if(!cartItems?.find((item)=>item.id === _id))
        setCartItems([...cartItems , {id: _id , count : 1 , price :_price}])
    else setCartItems(cartItems?.map((item)=>{
        if(item.id ===_id)
        return{...item , count : item.count + 1, price : cartItems?.reduce((prev, current)=>{
            return  prev + current.price
        
          } , _price)}
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
    const contextValue = {cartItems , addToCart , removeFromCart , emptyCart , clearCarts }
    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}