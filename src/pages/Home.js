import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate();
  let id=12
  const handleClick =()=>{
    navigate(`/login/${id}`)
  }
  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Home
