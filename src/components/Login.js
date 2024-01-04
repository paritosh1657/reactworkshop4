import React from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
  const {id}= useParams();
  return (
    <div>
      Login {id}
    </div>
  )
}

export default Login
