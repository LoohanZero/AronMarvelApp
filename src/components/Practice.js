import React, { useState, useEffect } from 'react';

// SYNC CODE -> 1st solved
// ASYNC CODE --> DIVIDED IN 2 -> 1) JAVASCRIPT ASYNC CODE (setTimeout, setInterval) -> 2d solved
//                                2) CALLS TO THE BACKEND: FETCH, AXIOS, XMLHTTPREQUEST -> last solved

//LIFECYCLE
// 1) The mounting (the first rendering)
// 2) Rerender (useState FORCES A RERENDER WHEN ITS VARIABLE IS CHANGED)
// 3) Unmount (delete and destroy everything)

const Practice = () => {
    const [ name, setName ] = useState('aron');
    const [ number, setNumber ] = useState(0);
    const [ characters, setCharacters] = useState(null);
    const [ comics, setComics ] = useState(undefined);

    const clickButton = () => {
        setTimeout(() => setName(`My name is ${name}`));
        // "My name is " + name
        // `My name is ${name}`
    }
    // Terminal prints Promise<pending> -> resolved or rejected
    
    console.log(clickButton);
  return (
    <div>
        <p>{name}</p>
        <button onClick={() => setName('Lujan')}>Change Name to Lujan</button>
        <button onClick={clickButton}>Change to other sentence</button>
    </div>
  )
}

export default Practice