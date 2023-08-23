import React from 'react'
import signupImg from "../assests/signup.png"
import Template from '../components/Template'
export const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
       <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />

    </div>
  )
}
export default Signup
