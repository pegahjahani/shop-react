
import { useContext, useEffect, useState } from "react"
import { dataContext } from "../App"

export const About =()=>{
    const data = useContext(dataContext)
    const [dataCont , setDataCont] = useState([])
    useEffect(()=>{
        setDataCont(data[0])
    })
    return(
        <div className="col-12 bg-success pagesStyle">
            ................
            <h1>about ::</h1>
        </div>
    )
}