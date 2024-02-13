
import { useContext, useEffect, useState } from "react"
import { dataContext } from "../App"

export const About =()=>{
    const data = useContext(dataContext)
    const [dataCont , setDataCont] = useState([])
    useEffect(()=>{
        setDataCont(data[0])
    })
    return(
        <div>
            
            <div>
            <h1>about ::</h1>
            {Object.keys(dataCont).map((item , index)=>{
                return(
                    <div key={index}>
                        <div><span>userName:</span>{dataCont[item].username}</div>
                    </div>
                )
                
            })}
        </div>
        </div>
    )
}