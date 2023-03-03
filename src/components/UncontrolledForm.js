import React from 'react'

//UNCONTROLLED INPUTS - REACT IS CONTROLLING THE INPUTS NOT US
const Form = () => {
    const submittedForm = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.firstName.value);
        console.log(event.target.lastName.value);
    }
  return (
    <form onSubmit={submittedForm}>
        <input name="firstName" placeholder='First Name'/>
        <input name="lastName" placeholder='Lastname'/>
        <input type="email" name="email" placeholder='Email'/>

        <button type="submit">Submit</button>
    </form>
  )
}

export default Form