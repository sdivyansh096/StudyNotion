import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"


function SignupForm({setIsLoggedIn}) {
  const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const [showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");

    function changeHandler(event){

        setFormData((prevData)=>{
            return({

            ...prevData,
            [event.target.name]:event.target.value
            })
        })
    }
    
    function submitHandler(event){
      event.preventDefault();
      if(formData.password!==formData.confirmPassword){
        toast.error("Password do not match");
        return;
      }

      setIsLoggedIn(true);
      toast.success("Account Created");
    
      navigate("/dashboard");
    }
  return (
    <div>
   <div className=' flex bg-slate-900 p-1  my-6 gap-x-1 rounded-full max-w-max'>
    <button
    className={`${accountType==="student"?
    "bg-slate-800 text-white"
    :
    "bg-transparent text-slate-400	"} py-2 px-5 rounded-full transition-all duration-200`}
    onClick={()=>setAccountType("student")}
    >
        Student
    </button>
    <button className={`${accountType==="instructor"?
    "bg-slate-800 text-white"
    :
    "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}

    onClick={()=>setAccountType("instructor")}
    >
        Instructor
    </button>
    </div>
    <form onSubmit={submitHandler}>
        {/* FirstName and LastName */}
        <div className='flex gap-x-4 mt-[10px]'>
        <label className='w-full'>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name 
            <sup className="text-pink-200 ">*</sup></p>
            <input
            placeholder='Enter First Name'
            required
            type='text'
            name='firstName'
            onChange={changeHandler}
            value={formData.firstName}
            className="bg-slate-900 rounded-[0.5rem] text-white w-full p-[12px]"
            />
        </label>
        <label className='w-full'>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200 ">*</sup></p>
            <input
            placeholder='Enter Last Name'
            required
            type='text'
            name='lastName'
            onChange={changeHandler}
            value={formData.lastName}
            className="bg-slate-900 rounded-[0.5rem] text-white w-full p-[12px]"
            />
        </label>
        </div>
        {/* email address */}
        <div className='mt-[10px]'>
        <label className='w-full' >
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200 ">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            className="bg-slate-900 rounded-[0.5rem] text-white w-full p-[12px]"
          />
        </label>
        </div>
        {/* create and confirmPassword */}
        <div className=' w-full flex gap-x-4 mt-[10px]'>
        <label className='relative w-full' >
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Create Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword?("text"):("password")}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Create Password"
            className="bg-slate-900 rounded-[0.5rem] text-white w-full p-[12px]"
          />
            <span className="absolute right-3 top-[38px]  cursor-pointer "
            onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)} 
            </span>
        </label>
        <label className='relative w-full'>
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Confirm Password<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showConfirmPassword ?("text"):("password")}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm password"
            className="bg-slate-900 rounded-[0.5rem] text-white w-full p-[12px]"
          />
            <span className="absolute right-3 top-[38px]  cursor-pointer"
             onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
            {showConfirmPassword? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
             : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)} 
            </span>
        </label>
        </div>
           <button className=" w-full bg-yellow-400 rounded-[8px] font-medium text-slate-950 px-[12px] py-[8px] mt-6">
            Create Account
        </button>
    </form>
    </div>
  )
}

export default SignupForm