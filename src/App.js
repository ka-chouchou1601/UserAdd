import React, {useState}from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'


const App = () => {
  const [usersList, setUsersList] =useState([])

const AddUserHandler=(uName, uAge)=>{
setUsersList((prevUsersList)=>{
  return [...prevUsersList,
    {
      name: uName, 
      age:uAge,
     id:Math.random.toString()
    }]
//prev because it depends on the previous list in AddUser to fill the new one 
})
}
  return (
    <div>
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  )
}

export default App