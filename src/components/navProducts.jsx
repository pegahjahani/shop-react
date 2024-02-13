import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { ShopContext } from "../context/shopContext"


export const NavBar = ()=>{
    const {cartitems} = useContext(ShopContext)
    // const itemCount = cartitems.reduce((accumulator, currentValue)=>{

    // })
    return(
        <div className="navbar navbar-dark bg-dark navbar-expend-lg">
            <div className="container">
                <a className="navbar-brand">shopping</a>
                <ul className="navbar-nav styleMenu">
                    <li className="nav-item listNavShop">
                        <Link to="/shoping">shop</Link> 
                    </li>
                    <li className="nav-item listNavShop">
                        <Link to="/shoping/Carts" title="carts">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}