import React from 'react'
import { useParams } from 'react-router-dom';

const Comic = () => {
  const { id } = useParams();
  return (
    <div>{id}</div>
  )
}

export default Comic