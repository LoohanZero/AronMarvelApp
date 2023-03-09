import React from 'react'
import axios from 'axios'

// fetch -> javascript async function
// axios -> react package
// HTTP Secure -> Protocol for sending and receiving information - from and to the backend
// front asks backend answers
// FRONT SENDS METHODS TO THE BACKEND ASKING FOR INFO

// GET -> requesting information (not modifying anything) / you can only send info in the url
// POST -> inserting information or we need to send encripted information to the backend
// PUT/PATCH -> Patch not used - REPLACE information
// DELETE -> Ask to delete the info from the database
// https://www.someurlhere.com/endpoint?name=jane&husbandName=mark
// URL -> address of website (building)
// ENDPOINT -> Apartment 
// QUESTION MARK ? -> dividing the address and apartment of the url from envelope that you need 
// AFTER QUESTION MARK -> information for the backend
// PROMISE -> promise is a javascript concept - means that you are doing an async call and that you are waiting for a response
// it's a promise because it will get a result - rejection or a resolved
// promises can be chained using a .then
// .catch

// PROMISE -> 3 STATE - Pending, resolved and rejected

// axios.get('https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18')
// .then((reponse) => {
//   console.log('response', reponse)
// }).catch((error) => {
//   //PROMISE IS REJECTED - STATUS 400/500
//    console.log(error)
// })

const fetchMarvelCharactersWithTryCatch = async () => {
  try {
    const response = await fetch('https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18');
    const data = await response.json();
    console.log('TRYCATCH', data);
  }
  catch (error) {

  }
  finally {
    // EXECUTED EITHER IF THE PROMISE IS RESOLVED OR REJECTED
  }
}

const fetchMarvelCharactersWithThen = () => {
  fetch('https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18')
  .then((response) => {
    // PROMISE IS RESOLVED FAVORABLY - STATUS 200
    // REPONSE IS AN OBJECT WITH DATA OF THE CALL
    // BODY RESPONSE IS ENCRYPTED AND NEEDS TO BE DESINCRYPTED FOR JS TO READ IT
    // BODY RESPONSE IS A SPECIAL STRING (STRINGIFIED) AND WE HAVE TO PARSE IT
    const data = response.json(); // ASYNCRONOUS - RETURNS A PROMISE 
    console.log('FETCH WITH THEN DATA', data);
    return data;
  }).then((uncryptedData) => {
    console.log('FETCH WITH THEN DATA uncryptedData', uncryptedData);
  }).catch((error) => {
    //PROMISE IS REJECTED - STATUS 400/500
    console.log(error)
  }).finally(()=> {
     // EXECUTED EITHER IF THE PROMISE IS RESOLVED OR REJECTED
  });
}

const Characters = () => {
 
  fetchMarvelCharactersWithThen();
  fetchMarvelCharactersWithTryCatch();

  return (
    <div>Characters</div>
  )
}

export default Characters