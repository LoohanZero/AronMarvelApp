import React, { useEffect, useState } from 'react'
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
const otherFunction = () => {
  console.log('OTHER FUNCTION')
}

const fetchMarvelCharactersWithTryCatch = async (setCharacters) => {
  try {
    // const response = await fetch('https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18');
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18');
    // const data = await response.json();
    // RESPONSE IS FROM AXIOS, FIRST DATA IS A KEY WORD FROM AXIOS AND SECOND DATA IS A KEY WORD FROM MARVEL
    // console.log('TRYCATCH response', response);
    // console.log('TRYCATCH response.data', response.data);
    // console.log('TRYCATCH response.data.data', response.data.data);
    console.log('TRYCATCH response.data.data.results', response.data.data.results)
    setCharacters(response.data.data.results); // SETS CHARACTERS VARIABLE AND FORCES A RERENDER
  }
  catch (error) {

  }
  finally {
    // EXECUTED EITHER IF THE PROMISE IS RESOLVED OR REJECTED
  }
}

const Characters = () => {
  const [ characters, setCharacters] = useState(null);
  const [ cart, setCart] = useState(null);
  const [ firstNumber, setFirstNumber ] = useState(0)
  const [ secondNumber, setSecondNumber ] = useState(0)
  const [ operator, setOperator ] = useState(0)

  // fetchMarvelCharactersWithThen();

  useEffect(() => {
    fetchMarvelCharactersWithTryCatch(setCharacters);
    // DEPENDENCIES ARRAY IS EMTPY SO USEEFFECT IS ONLY TRIGGERED ON MOUNT
    // WHEN REACT RERENDERS THE PAGE, USEEFFECT IS GOING TO BE IGNORED
  }, []);
    // characters.length > 10 ? 'bigger' : 'smaller' -> JSX
    // if(characters.length > 10) {
    // return 'bigger'
    //  } else {
    //   return 'smaller'
    //  } -> NOT JSX
  return (
    <div>
      <button onClick={() => {

       }}>Anonymous function</button>
      <button onClick={(otherFunction)}>otherFunction</button>
      { characters?.length > 10 ? 'bigger' : 'smaller' }
      { characters?.length > 10 && 'bigger'}
      { characters?.length < 10 && 'smaller' }
      <p>Characters</p>
      { cart?.length > 0 ? 
      cart.map(() => <article>cart.id</article>) 
      :
      <p>No articles added to the cart</p> }
      
    </div>

  )
}

export default Characters