import { useContext, useEffect, useState } from "react"
import { dataContext } from "../App"
import { login , logOut } from "../components/store"
import {useDispatch , useSelector} from "react-redux"

export const Home =()=>{
    const data = useContext(dataContext)
    const [dataCont , setDataCont] = useState([])
    const dispatch = useDispatch()
    const [newUsername , setNewUsername] = useState("")
    const selector = useSelector((state)=>state.userName)
    const click = ()=>{
        dispatch(login({userName : newUsername}))
    }

    useEffect(()=>{
        setDataCont(data[0])
    })
  
    return(
        <div className="col-12 bg-primary pagesStyle">
            <h1>home:{selector.userName}</h1>
        
        </div>
    )
}