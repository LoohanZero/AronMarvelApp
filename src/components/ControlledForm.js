import React, {useState} from 'react'

const ControlledForm = () => {
    const [firstName, setFirstName] = useState('')

    const submittedForm = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.firstName.value);
        console.log(event.target.lastName.value);
    }
    console.log(firstName)
  return (
    <form onSubmit={submittedForm}>
        <input type="text" name="firstName" placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        {/* <input name="lastName" placeholder='Lastname'/>
        <input type="email" name="email" placeholder='Email'/> */}

        <button type="submit">Submit</button>
    </form>
  )
}

export default ControlledForm