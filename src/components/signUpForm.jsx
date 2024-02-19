import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignUp = ({ flag, setFlag, setShowForm , registerForm , registerData , setRegisterData}) => {
  
  const schema = yup.object().shape({
    firstName: yup.string().required("firstName is required!"),
    lastName: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().min(5).max(15).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password is not match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmitForm = async (data) => {
   console.log(data);
   await registerForm(data)
   setRegisterData({ firstName: '', lastName: '', userName: '', password: '' , confirmPassword:'' })
  };
  return (
    <form className="col-5 gap-2" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="col-12 d-flex justify-content-end px-3 align-items-center mt-3">
        <CloseIcon
          onClick={() => {
            setShowForm(false);
          }}
        />
      </div>
      <label className="col-10" htmlFor="firstName">
        firstName :
      </label>
      <input
        className="col-10"
        type="text"
        id="firstName"
        placeholder="firstName"
        
        {...register("firstName")}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <label className="col-10" htmlFor="lastName">
        lastName :
      </label>
      <input
        className="col-10"
        type="text"
        id="lastName"
        placeholder="lastName"
        
        {...register("lastName")}
      />
      <label className="col-10" htmlFor="userName">
        userName :
      </label>
      <input
        className="col-10"
        type="text"
        id="userName"
        placeholder="userName"
        
        {...register("userName")}
      />
      <label className="col-10" htmlFor="password">
        password :{" "}
      </label>
      <input
        className="col-10"
        type="password"
        id="password"
        placeholder="password"
        {...register("password")}
      />
      <label className="col-10" htmlFor="confirmPassword">
        confirmPassword:{" "}
      </label>
      <input
        className="col-10"
        type="password"
        id="confirmPassword"
        placeholder="confirmPassword"
       
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <div className="col-12">
        <button
          className="col-5 btn  mb-1"
          style={{ backgroundColor: "#79AC78", color: "white" }}
        >
          signUp
        </button>
      </div>
      <div
        className="col-12 d-flex justify-content-start px-3 align-items-center mt-1 mb-1"
        style={{ color: "darkgreen", cursor: "pointer" }}
      >
        <KeyboardReturnIcon
          onClick={() => {
            setFlag(false);
          }}
        />
      </div>
    </form>
  );
};
