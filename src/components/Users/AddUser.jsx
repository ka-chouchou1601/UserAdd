import React, {useState} from 'react'
import { Card } from '../UI/Card'
import classes from './AddUser.module.css'


import Button from './Button'


const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler=(event)=>{
    event.preventDefault()
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }
    if(+enteredAge < 1){
      return;
    } //validation of the data
console.log(enteredUserName,enteredAge );
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

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"
         onChange={usernameChangeHandler}
         value={enteredUserName} />
        <label htmlFor="age">Age(Year)</label>
        <input 
        id="age"
         type="number" 
         onChange={ageChangeHandler}
         value={enteredAge} />
        <Button  ClassName={props.className} type="submit" >Add a user</Button>
      </form>
    </Card>
  );
}

export default AddUser