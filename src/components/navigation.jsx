import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home'; 
import StorefrontIcon from '@mui/icons-material/Storefront'; 
import { useState } from "react";
import { Form } from "../components/form";



const Navigat = ()=>{
  const [showForm, setShowForm] = useState(false);

    return(
        <div className="navbar navbar-dark bg-light navbar-expend-lg bg-dark">
            <div className="container-fluid col-12">
            <nav className="navbar-nav navbar-brand styleMenu col-3">
            <Link to="./" title="home" style={{color:'Background'}}><HomeIcon/></Link>
            <Link to="/LogForShop" title="shop" style={{color:'Background'}} onClick={()=>{setShowForm(true)}}><StorefrontIcon/></Link>

        </nav>
            </div>
       
        </div>
    )
}



export default Navigat