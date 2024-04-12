import React, { createContext, useState } from 'react'

export const formdata = createContext()

const UserContext = ({children}) => {

    const [users, setUsers] = useState([])
   

    const updateUser=(data)=>{
        setUsers(data)
    }
  return (
    <>
        <formdata.Provider value={{users, updateUser}}>
            {children}
        </formdata.Provider>
    </>
  )
}

export default UserContext
