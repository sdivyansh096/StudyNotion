import React from 'react'
import Template from '../components/Template'
import loginImg from "../assests/login.png"

export const Login = ({setIsLoggedIn}) => {
  return (
    <div className='h-screen'>
      <Template
          title="Welcome Back"
          desc1="Build skills for today, tomorrow, and beyond."
          desc2="Education to future-proof your career."
          image={loginImg}
          formType="login"
          setIsLoggedIn={setIsLoggedIn}   
      /> 
    </div>
  )
}
export default Login
