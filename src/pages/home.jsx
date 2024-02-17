import { useContext, useEffect, useState } from "react"
import { Welcome } from "../components/welcom"
import Button from '@mui/material/Button'
import { Form } from "../components/form"
import { HomeContext, HomeContextProvider } from "../context/homeContext"


export const Home =()=>{
    
  const [showForm , setShowForm]= useState(false)
  
    return(
      <HomeContextProvider>
          <div className="col-12 pagesStyle">
            <Welcome/>
         <div className="col-12 container mt-3">
            <div>
                <h3>login for buy !</h3>
            </div>
            <Button className="col-2" style={{backgroundColor:'#016A70' , marginTop:'20px' , color:'white'}} onClick={()=>{setShowForm(true)}}>login</Button>
         </div>
        {
            showForm===true &&  <div>
            <Form setShowForm={setShowForm}/>
         </div>
        }
        </div>
      </HomeContextProvider>
    )
}