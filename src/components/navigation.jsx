import { Link } from "react-router-dom";

const Navigat = ()=>{
    return(
        <div className="navbar navbar-dark bg-light navbar-expend-lg">
            <div className="container">
            <nav className="navbar-nav navbar-brand styleMenu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shoping">Shoping</Link>
        </nav>
            </div>
       
        </div>
    )
}
export default Navigat