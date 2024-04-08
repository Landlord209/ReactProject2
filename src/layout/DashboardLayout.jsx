import {Outlet} from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <h1>DashBoard ready</h1>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
