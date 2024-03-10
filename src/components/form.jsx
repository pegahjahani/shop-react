import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { SignUp } from "./signUpForm";
export const Form = () => {
  const {
    login,
    data,
    setData,
  } = useContext(ShopContext);
  const [flag, setFlag] = useState(false);
  const [showForm , setShowForm] = useState(true)

  return (
    
    <div className="container col-12 d-flex justify-content-center align-items-center mt-3">
      
      <div className="formStyle col-8">
        {flag===false ? (
          <form
            className="col-5"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            
            {/* <div className="col-12 d-flex justify-content-end px-3 align-items-center mt-3">
              <CloseIcon
                onClick={() => {
                  setShowForm(false);
                }}
              />
            </div> */}
            <label className="col-10 mt-4" htmlFor="userName">
              username :
            </label>
            <input
              className="col-10"
              type="text"
              id="userName"
              placeholder="username"
              value={data.userName}
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }));
              }}
            />
            <label className="col-10" htmlFor="userName">
              password :{" "}
            </label>
            <input
              className="col-10"
              type="password"
              id="password"
              placeholder="password"
              value={data.password}
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center gap-2">
              <button
                className="col-8 btn"
                style={{ backgroundColor: "white", color: "red" }}
                onClick={() => {
                  login();
                }}
              >
                login
              </button>
             
              <button
                className="col-8 btn "
                onClick={() => {
                  setFlag(true);
                }}
                style={{ border: "1px solid white" , color:"white" }}
              >
                signUp
              </button>
            </div>
          </form>
        ) : (
         <SignUp flag={flag} setFlag={setFlag} setShowForm={setShowForm}/>
        )}
      </div>
    </div>
  );
};
