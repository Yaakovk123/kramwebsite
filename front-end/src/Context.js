import React, {useState, useContext} from 'react'


const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

export const useUser = ()=>{
    return useContext(UserContext)
}

export const useUpdate = (name, password)=>{
      return useContext(UpdateUserContext)
}



function Context({children}) {
    
    const [user, setUser] = useState({
        name: 'Logged Out',
        password:'noPassword'
    })
    const updateUser = (name, password)=>{
        setUser({
            name:name, 
            password:password
        })
    }

  return (
    <UserContext.Provider value = {user}>
        <UpdateUserContext.Provider value = {updateUser}>
            {children}
        </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
}

export default Context