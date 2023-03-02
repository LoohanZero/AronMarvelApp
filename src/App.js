
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// SYNC CODE -> 1st solved

// ASYNC CODE --> DIVIDED IN 2 -> 1) JAVASCRIPT ASYNC CODE (setTimeout, setInterval) -> 2d solved
//                                2) CALLS TO THE BACKEND: FETCH, AXIOS, XMLHTTPREQUEST -> last solved

//LIFECYCLE
// 1) The mounting (the first rendering)
// 2) Rerender (useState FORCES A RERENDER WHEN ITS VARIABLE IS CHANGED)
// 3) Unmount (delete and destroy everything)
function App() {
  const [ name, setName ] = useState('aron');
  const [ otherName, setOtherName ] = useState('aron');
  const [ characters, setCharacters] = useState(null);
  const [ comics, setComics ] = useState(undefined);


  const clickButton = () => {
    setTimeout(() => setName('Button Clicked from clickButton'), 2000);
  }
  // Terminal prints Promise<pending> -> resolved or rejected
  
  console.log(clickButton);
  return (
    <div className="App">
      <header>
        <nav>
          <p>{name}</p>
          <button onClick={() => setName('Lujan')}>Change Name to Lujan</button>
          <button onClick={clickButton}>Change To other sentence</button>
        </nav>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
