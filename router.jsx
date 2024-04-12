import {createBrowserRouter} from "react-router-dom"
import DashboardLayout from "./src/layout/DashboardLayout"
import HomePg from "./src/pages/HomePg"
import SettingsPg from "./src/pages/SettingsPg"
import UserPg from "./src/pages/UserPg"
// import UserModal from "./src/pages/UserModal" 

const router = createBrowserRouter([
    {
      path: "/",
      element:<DashboardLayout/>,
      children: [
        {
          index: true,
          element: <HomePg/>

        },
        {
          path:"/settings",
          element: <SettingsPg/>
        },
        {
          path:"/users",
          element:<UserPg/>
        }

      ]          
    },
   
])

export default router