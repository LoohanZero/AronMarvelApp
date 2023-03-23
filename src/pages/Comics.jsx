import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// {} === {} -> false

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// MAP METHOD -> loops thought the array and the result will be the same amout of items as the array even if you select only certain things
// RESULT -> another array

// JSX CANNOT PRINT OBJECTS
const fetchMarvelCharactersWithTryCatch = async (setComics, page) => {
  try {
    // const response = await fetch('https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18');
    const response = await axios.get(`https://gateway.marvel.com/v1/public/comics?apikey=0e10884938787c40366929ce9fde20f4&limit=18&offset=${18 * (page - 1)}`);
    // const data = await response.json();
    // RESPONSE IS FROM AXIOS, FIRST DATA IS A KEY WORD FROM AXIOS AND SECOND DATA IS A KEY WORD FROM MARVEL
    // console.log('TRYCATCH response', response);
    // console.log('TRYCATCH response.data', response.data);
    // console.log('TRYCATCH response.data.data', response.data.data);
    console.log('TRYCATCH response.data.data.results', response.data.data.results)
    setComics(response.data.data.results); // SETS CHARACTERS VARIABLE AND FORCES A RERENDER
  }
  catch (error) {}
  finally {
    // EXECUTED EITHER IF THE PROMISE IS RESOLVED OR REJECTED
  }
}

const Comics = () => {
  const [ comics, setComics] = useState(null);
  const [ page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMarvelCharactersWithTryCatch(setComics, page);
  }, [ page ]) // -> dependencies array listens for changes in the page variable. If this variable doesnt change, the backend is called only on mount

  const mappedComics = comics && comics.map((object) => object.title)
  // console.log(mappedComics)
  return (
    <div>
      <span>{page}</span><button onClick={() => setPage(page + 1)}>Ask for page: {page + 1}</button>
      {comics && comics.map((comic, index) => 
      <div key={comic.id}>
        <a 
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={() => navigate(`/comic/${comic.id}`)}
        ><h2> {index + 1} - {comic.title}</h2></a>
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}/>
      </div>
      )}
    </div>
  )
}

export default Comics