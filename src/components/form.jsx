import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { HomeContext } from '../context/homeContext';
export const Form = ({setShowForm}) => {
    const {getUserData ,  userData , setUserData} = useContext(HomeContext)
    const [flag , setFlag] = useState(false)
   
  return (
    <div className="container col-12 d-flex justify-content-center align-items-center">
      <div className="formStyle col-8">
     {
      !flag ?
      <form className="col-5" onSubmit={(event)=>{event.preventDefault()}}>
      <div className='col-12 d-flex justify-content-end px-3 align-items-center mt-3'><CloseIcon onClick={()=>{setShowForm(false)}}/></div>
      <label className="col-10" htmlFor="userName">username :</label>
      <input className="col-10" type="text" id="userName" placeholder="username" />
      <label className="col-10" htmlFor="userName">password : </label>
      <input className="col-10" type="password" id="password" placeholder="password"/>
      <div className='col-12 d-flex flex-wrap justify-content-center align-items-center gap-2'>
      <button className="col-8 btn" style={{backgroundColor:'#004225' , color :'white'}} onClick={()=>{getUserData()}}>login</button>
      <button className="col-8 btn " onClick={()=>{setFlag(true)}} style={{border:'1px solid darkblue'}}>signUp</button>
      </div>

    </form>
    :
    <form className="col-5 gap-2 ">
      <div className='col-12 d-flex justify-content-end px-3 align-items-center mt-3'><CloseIcon onClick={()=>{setShowForm(false)}}/></div>
      <label className="col-10" htmlFor="firstName">firstName :</label>
      <input className="col-10" type="text" id="firstName" placeholder="firstName" />
      <label className="col-10" htmlFor="lastName">lastName :</label>
      <input className="col-10" type="text" id="lastName" placeholder="lastName" />
      <label className="col-10" htmlFor="userName">userName :</label>
      <input className="col-10" type="text" id="userName" placeholder="userName" />
      <label className="col-10" htmlFor="password">password : </label>
      <input className="col-10" type="password" id="password" placeholder="password"/>
      <button className="col-5 btn  mb-1" style={{backgroundColor:'#79AC78' , color:'white'}}>signUp</button>
      <div className='col-12 d-flex justify-content-start px-3 align-items-center mt-1 mb-1' style={{color:'darkgreen' , cursor:'pointer'}}><KeyboardReturnIcon onClick={()=>{setFlag(false)}}/></div>

    </form>
     }
      </div>
    </div>
  );
};
