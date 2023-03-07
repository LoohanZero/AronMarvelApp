import React from 'react'

// fetch -> javascript async function
// axios -> react package
// HTTP Secure -> Protocol for sending and receiv6ing information - from and to the backend
// front asks backend answers
// FRONT SENDS METHODS TO THE BACKEND ASKING FOR INFO

// GET -> requesting information (not modifying anything)
// POST -> inserting information
// PUT/PATCH -> Patch not used - REPLACE information
// DELETE -> Ask to delete the info from the database
// https://www.someurlhere.com/endpoint?name=jane&husbandName=mark
// URL -> address of website (building)
// ENDPOINT -> Apartment 
// QUESTION MARK ? -> dividing the address and apartment of the url from envelope that you need 
// PROMISE -> promise is a javascript concept - means that you are doing an async call and that you are waiting for a response
// it's a promise because it will get a result - rejection or a resolved
// promises can be chained using a .then
// .catch
const Characters = () => {

  fetch('https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18')
  .then((response) => {
    //PROMISE IS RESOLVED FAVORABLY - STATUS 200
    console.log(response)
  }).catch((error) => {
    //PROMISE IS REJECTED - STATUS 400/500
    console.log(error)
  })

  return (
    <div>Characters</div>
  )
}

export default Characters