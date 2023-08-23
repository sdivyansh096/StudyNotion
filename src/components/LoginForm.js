import React, { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
function LoginForm({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
const [showPassword,setShowPassword]=useState(false);

  function changeHandler(event){
    setFormData( (prevData)=>{
      return({
      ...prevData,
      [event.target.name]:event.target.value
      })   
    })
  }
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">
     
        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200 ">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            className="bg-slate-950 rounded-[0.5rem] text-white w-full p-[12px]"
          />
        </label>
        <label className="w-full relative">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
           Password <sup className="text-pink-200 ">*</sup>
          </p>
          <input
            required
            type={showPassword ? ("text"): ("password")}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            className="bg-slate-950 rounded-[0.5rem] text-white w-full p-[12px]"
          />
          <span
          className="absolute right-3 top-[38px]  cursor-pointer "
          onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
            
            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)} 
            </span>
            <Link to="#">
              <p className="max-w-max text-xs mt-1 text-blue-200 ml-auto">Forgot Password</p>
            </Link>
           </label> 
           <button className="bg-yellow-400 rounded-[8px] font-medium text-slate-950 px-[12px] py-[8px] mt-3">
               Sign in
           </button>
    </form>
  )};


export default LoginForm;
