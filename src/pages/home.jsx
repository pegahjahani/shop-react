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
        <div>
            <h1>home:{selector.userName}</h1>
            {Object.keys(dataCont).map((item , index)=>{
                return(
                    <div key={index}>
                        <div><span>name:</span>{dataCont[item].name}</div>
                    </div>
                )
                
            })}
     
     <div>
        <input type="text" onChange={(event)=>{setNewUsername(event.target.value)}} />
        <button onClick={click}>login</button>
        <button onClick={()=>{dispatch(logOut())}}>logout</button>

     </div>
        </div>
    )
}