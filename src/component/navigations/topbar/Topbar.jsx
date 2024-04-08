import avatar from "../../../assets/avatar.png"
import './topbar.css'
export default ()=>{
    return(
        <>
            <div className="topbar"> 
                <h1>Welcome david</h1>
               <img src={avatar} alt="" width="80px" />
            </div>
        </>
    )
}