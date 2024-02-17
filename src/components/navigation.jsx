import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home'; 
import StorefrontIcon from '@mui/icons-material/Storefront';  
const Navigat = ()=>{
    return(
        <div className="navbar navbar-dark bg-light navbar-expend-lg">
            <div className="container-fluid col-12">
            <nav className="navbar-nav navbar-brand styleMenu col-3">
            <Link to="/" title="home" style={{color:'darkgreen'}}><HomeIcon/></Link>
            {/* <Link to="/about">About</Link>  */}
            <Link to="/Shoping" title="shop" style={{color:'darkblue'}}><StorefrontIcon/></Link>
        </nav>
            </div>
       
        </div>
    )
}
export default Navigat