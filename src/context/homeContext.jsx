import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const HomeContext = createContext(null)
export const HomeContextProvider = (props)=>{
    const [userData , setUserData] = useState([])
    const getUserData = async()=>{
        const userData = await axios.get('http://localhost:2000/users')
        console.log('userdata' , userData.data);
        setUserData(userData.data)
       }
    //    useEffect(()=>{getUserData()} , [])
       const contextValue = {userData , setUserData , getUserData}
       return (<HomeContext.Provider value={contextValue}>{props.children}</HomeContext.Provider>)
}