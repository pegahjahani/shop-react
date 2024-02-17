import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"



export const Welcome = ()=>{
    const [showWelcome , setShowWelcome] = useState()
    useEffect(()=>{
      const data = localStorage.getItem("show-app-intro")
      setShowWelcome(JSON.parse(data) ?? true)
    } , [])
    const closeBoxWelcome = ()=>{
        setShowWelcome(false)
        window.localStorage.setItem("show-app-intro" , JSON.stringify(false))
    }
    return(
        <>
          {
            showWelcome===true &&
        <div className="container">
            <div className="bg-success text-white my-3">
            <FontAwesomeIcon icon={faClose} style={{float :"right" , margin:"5px"}} onClick={closeBoxWelcome}/>
            <div className="p-4">welcome</div>
        </div>
        </div>
    }
    </>
    )
}