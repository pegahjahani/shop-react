import { useContext, useState } from "react"
import { Welcome } from "../components/welcom"
import Button from '@mui/material/Button'
import { Form } from "../components/form"
import { ShopContext } from "../context/shopContext"
import { ShopContextProvider } from "../context/shopContext";




export const Home =()=>{
    
  const [showForm , setShowForm]= useState(false)

  
    return(
     
      <ShopContextProvider>
           <div className="col-12 pagesStyle">
            <Welcome/>
         <div className="col-12 container mt-3">
            <div>
            </div>
           {!showForm===true &&
           <>
           
           <h3>login for buy !</h3>
             <Button className="col-2" style={{backgroundColor:'#016A70' , marginTop:'20px' , color:'white'}} onClick={()=>{setShowForm(true)}}>login</Button></>
            }
             </div>
        {
            showForm===true &&  <div>
            <Form setShowForm={setShowForm} />
         </div>
        }
        </div>
        </ShopContextProvider>
  
   
    )
}