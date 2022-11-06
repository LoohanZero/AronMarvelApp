
import React from 'react';
import axios from 'axios';


// -HTTP ASKING TO BACKEND-
// http-> protocol ("unsafe")
// https -> protocol ("safe")
// /characters -> ENDPOINT
// /comics ->  ENDPOINT
// ? -> divisor between url and params
// apikey=0e10884938787c40366929ce9fde20f4 -> apikey is the param (keyword), = -> assignation sign, 0e10884938787c40366929ce9fde20f4 -> value
// & -> there's more info to send, act as and AND
// https://gateway.marvel.com/v1/public/comics?apikey=0e10884938787c40366929ce9fde20f4&limit=18"
// GET -> Get information - param through the URL, IS PUBLIC
// POST -> HAS A BODY, SENT FROM FRONTEND TO BACKEND WITH PRIVATE INFORMATION // Can send params in url as well (JSON FORMAT, HTML FORMAT which is not as common, very old) // ADD INFORMATION TO BACKEND (For example a register event in a website)
// PUT -> HAS A BODY, SENT FROM FRONTEND TO BACKEND WITH PRIVATE INFORMATION // Can send params in url as well (JSON FORMAT, HTML FORMAT which is not as common, very old) // MODIFY INFO IN BACKEND
// PATCH -> Same as PUT, not usually used
// DELETE -> HAS A BODY, SENT FROM FRONTEND TO BACKEND WITH PRIVATE INFORMATION // Can send params in url as well (JSON FORMAT, HTML FORMAT which is not as common, very old) // DELETE INFO IN BACKEND

//ASYNCHRONOUS
// console.log(1)
// setTimeout(() => console.log(2), 200)
// setTimeout(() => console.log(3))
// console.log(4)

// -> terminal printing:
// 1
// 4
// 3
// 2

// first synchronous, then asynchronous api web stack wiht no timing frame, and finally asynchronous in the event queue stack with time frame

function App() {

  const response = axios.get("https://gateway.marvel.com/v1/public/characters?apikey=0&limit=18").then((response) => {
    console.log('ASYNC RESPONSE', response)
  }).catch((error) => {
    console.log(error)
  })

  console.log('SYNC RESPONSE', response);
  // Terminal prints Promise<pending> -> resolved or rejected
  return (
    <div className="App">
      <header>
        <nav>
          <a>Characters</a>
          <a>Comics</a>
        </nav>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
