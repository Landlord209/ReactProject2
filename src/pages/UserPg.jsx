import { createContext, useState } from "react"
import style from "./user.module.css"
// import NavLinks from "../component/navigations/navlinks/NavLinks"
import Popup from "reactjs-popup"
import HomePg from "./HomePg"




export default ()=>{

    

    const [render, setRender] = useState(false)


    const change = ()=>{
        
        setRender((rend)=> !rend)
    }

    const [users, setUsers] = useState([])
    const [details, setDetails] = useState({
        name: "",
        email: "",
        file:""

    })
    


    const detailHandler=(e)=>{
        const {name, value} = e.target
        setDetails({...details,[name]:value})
        
    }
 
    const addUser = (event)=>{
        event.preventDefault()
        if(details.name && details.email !==""){
             setUsers([...users, details])
           
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
                {/* <Popup trigger={<button className={style.btn}>+ Add</button>} > */}

                {!render?
                <button className={style.btn} onClick={change}>+ Add</button>:
                <div>
                    <button className={style.btn2} >+ Add</button>

                    
                        <form onSubmit={addUser} id={style.form}>
                            <div className={style.modalHead} >
                                <h3>Add Users</h3>
                                <button type="check" onClick={change}>Close</button>
                            </div>

                            <input type="text" name="name" value={details.name} id={style.name} placeholder="Name" onChange={detailHandler} />

                            <label htmlFor="Email">Invite By Email</label>

                            <input type="email" name="email" value={details.email} placeholder='Enter your email' id={style.email} onChange={detailHandler} />

                            <input type="file" name="file" onChange={detailHandler}/>

                            <button type="submit"  >Confirm</button>

                        </form>
                  
                    

                </div>
            

                }
                    
                  
                {/* </Popup> */}
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
                     users.map((user, index)=>(
                        <tr key={index}>
                            <td><img src="../src/assets/avatar.png" alt="" width='50px' /></td>
                            <td>{user.name}</td>
                            <td> {user.email} </td>
                        </tr>
                        
                     ))  
                      
                    }
                 </tbody>
                </table>
            </section>
            <HomePg lengths={users.length }/>
            
        </div>
    )
}