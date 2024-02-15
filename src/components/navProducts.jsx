import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { ShopContext } from "../context/shopContext"


export const NavBar = ()=>{
    const {cartItems , emptyCart} = useContext(ShopContext)
    const itemCount = cartItems?.reduce((prev, current)=>{
      return  prev + current.count

    } , 0)
    return(
        <div className="navbar navbar-dark bg-dark navbar-expend-lg">
            <div className="container">
                <a className="navbar-brand">my shop</a>
                <ul className="navbar-nav styleMenu">
                    <li className="nav-item listNavShop">
                        <Link to="/shoping">shop</Link> 
                    </li>
                    <li className="nav-item listNavShop">
                        <Link to="/shoping/Carts" title="carts">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                           {
                            itemCount===0 || emptyCart===false ?
                            null :
                            <span className="cart-items-count">{itemCount}</span>
                           }
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}