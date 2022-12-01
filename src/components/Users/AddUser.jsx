import React, {useState} from 'react'
import { Card } from '../UI/Card'
import classes from './AddUser.module.css'


import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
const [error, setError] = useState('')
  const addUserHandler=(event)=>{
    event.preventDefault()
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
     setError({
      title:' An Error',
      message:'kindly include valide input '
     })
    }
    if(+enteredAge < 1){
      setError({
        title:'Age error',
        message : 'kindly include your correct Age'
      })
    } //validation of the data
props.onAddUser(enteredUserName,enteredAge);
setEnteredUserName('');
setEnteredAge(''); // to rest the values
//to rest the value in the input then put give a value to the inputs
  }

  const usernameChangeHandler=(event)=>{
setEnteredUserName(event.target.value);
  }
   const ageChangeHandler = (event) => {
     setEnteredAge(event.target.value);
   };

//   so that the form doesn't relode after clicking the submit button  
const errorHandler=()=>{
  setError(null);
}
  return (
    <div>
    {error && <ErrorModal
     title={error.title} 
     message= {error.message} 
     onConfirm={errorHandler}/>}  
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age(Year)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button ClassName={props.className} type="submit">
            Add a user
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser