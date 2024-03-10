import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Suspense, useState } from "react";
import { Form } from "../components/form";
import { Loading } from "./loading";

const Navigat = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Suspense fallback={<Loading />}>
      <div className="navbar navbar-dark bg-light navbar-expend-lg bg-dark  col-12 navigateShop">
        <div className=" col-12 container-fluid">
          <nav className="navbar-nav navbar-brand styleMenu col-3">
            <Link to="./" title="home" style={{ color: "Background" }}>
              <HomeIcon />
            </Link>
            <Link
              to="/LogForShop"
              title="shop"
              style={{ color: "Background" }}
              onClick={() => {
                setShowForm(true);
              }}
            >
              <StorefrontIcon />
            </Link>
          </nav>
        </div>
      </div>
    </Suspense>
  );
};

export default Navigat;
