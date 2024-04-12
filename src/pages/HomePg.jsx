import { useContext } from "react"
import { formdata } from "../UserContext"

export default ()=>{
    const {users}= useContext(formdata)
 
   
    

    return(
        <>
         <h1> Number of Registered Users: {users.length}  </h1>
        </>
    )
   
}