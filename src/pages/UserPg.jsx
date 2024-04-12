import { createContext, useContext, useState } from "react"
import style from "./user.module.css"
// import NavLinks from "../component/navigations/navlinks/NavLinks"
import Popup from "reactjs-popup"
import HomePg from "./HomePg"
import { formdata } from "../UserContext"
import UserModal from "./UserModal"




export default ()=>{

    

    const [render, setRender] = useState(false)


    const change = ()=>{
        
        setRender((rend)=> !rend)
    }

    // const [users, setUsers] = useState([])
    const {users, updateUser} = useContext(formdata)
    const [details, setDetails] = useState({
        name: "",
        email: "",
        file:""

    })
    const {name,email,file} = details


    const detailHandler=(e)=>{
        const {name, value, files} = e.target
        setDetails({...details,
            [name]:name ==="file" ?URL.createObjectURL(files[0]) :value
        })
        
    }
 
    const addUser = (event)=>{
        event.preventDefault()
        if(name && email !==""){
             updateUser([...users, details])
           
        change()
        }
        else{
            alert("Fill all input")
        }
       
     


    }
   


    return(
        
        <div className={style.users}>
             
            <div className={style.userInfo}>
                <h2>Users</h2>
                <main>
                {!render?
                <button className={style.btn} onClick={change}>+ Add</button>:
                <UserModal formFunction={addUser} rendering={change} func={detailHandler} nameVal={name} emailVal={email}/>
                }
                </main>
               
               
            </div>

            <section>
                <table border='4px' >
                   <tbody>
                    <tr>
                        <td></td>
                        <th>Names</th>
                        <th>Email</th>
                    </tr>
                    {
                     users.map((user, index)=>{
                      
                        return(
                             <tr key={index}>
                            <td>{file && <img src={user.file} alt="" width='50px' />}    </td>
                            <td>{user.name}</td>
                            <td> {user.email} </td>
                        </tr>
                        )
                       })  
                      
                    }
                 </tbody>
                </table>
            </section>
            
            
        </div>
    )
}