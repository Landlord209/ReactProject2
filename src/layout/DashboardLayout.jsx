import {Outlet} from 'react-router-dom'
import style from "./dash.module.css"
import SideBar from '../component/navigations/sidebar/SideBar'
import Topbar from '../component/navigations/topbar/Topbar'

const DashboardLayout = () => {
  return (
    <div className={style.section}>
      <SideBar/>
      <div className={style.section2}>
        <Topbar/>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default DashboardLayout
