import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { ShopContext } from "../context/shopContext"
import LogoutIcon from '@mui/icons-material/Logout'; 



export const NavBar = ()=>{
    const {cartItems , emptyCart , data , logOut} = useContext(ShopContext)
    const itemCount = cartItems?.reduce((prev, current)=>{
      return  prev + current.count

    } , 0)
    return(
        <div className="navbar navbar-dark  navbar-expend-lg navShop col-12 mt-2">
            <div className="container">
                <h2 className="navbar-brand">{data.userName} shop</h2>
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
                    <li className="nav-item listNavShop">
                     <Link to="/" title="logout" style={{color:'darkred'}} onClick={()=>{logOut()}}><LogoutIcon/></Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}