import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons"


export const NavBar = ()=>{
    return(
        <div className="navbar navbar-dark bg-dark navbar-expend-lg">
            <div className="container">
                <a className="navbar-brand">shopping</a>
                <ul className="navbar-nav styleMenu">
                    <li className="nav-item listNavShop">
                        <Link to="/shoping">shop</Link> 
                    </li>
                    <li className="nav-item listNavShop">
                        <Link to="/shoping/Carts">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}