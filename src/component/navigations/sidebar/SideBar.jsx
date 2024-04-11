import {FaHome, FaUser} from 'react-icons/fa'
import { AiOutlineSetting } from 'react-icons/ai'
import "./sidebar.css"
import NavLinks from '../navlinks/NavLinks'

const links = [
    {
        id: 1,
        too:'/',
        icon: <FaHome/>,
        label:'Home'
    },
    {
        id:2,
        too:'/settings',
        icon: <AiOutlineSetting/>,
        label:'Setting'
    },
    {
        id: 3,
        too:'/users',
        icon: <FaUser/>,
        label:'Users'
    }
]

export default ()=>{
    return(
        <>
            <div id="sideWrapper">
               <div id="links">
                    {
                        links.map(({too, label,icon, id})=>(
                            <NavLinks key={id} too={too}> {icon} {label}  </NavLinks>
                        ))
                    }
                </div>
            </div>
        </>
    )
}