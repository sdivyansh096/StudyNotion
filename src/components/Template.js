import React from 'react'
import frameImage from "../assests/frame.png";
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import {FcGoogle} from "react-icons/fc";
function Template({title,desc1,desc2,image,formType,setIsLoggedIn}) {
  return (
    <div className='flex justify-around w-11/12 max-w-{1160} py-12 mx-auto gap-x-12'>
       
        <div className='w-11/12 max-w-[450px]'>
          <h1
          className='text-white font-semihold text-[1.875rem] leading-[2.375rem]'
          >{title}</h1>
          <p className='text-[1.125rem] leading[1.625rem] mt-4'>
            <span className='text-slate-100'>{desc1}</span>
            <br/>
            <span className='text-blue-100 italic'>{desc2}</span>
          </p>
          {formType==="signup"?
           (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)
          :(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
          <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='h-[1px] bg-white w-full' ></div>
            <p className=' font-medium leading[1.375rem] text-white'>Or</p>
           <div className='h-[1px] bg-white w-full'></div> 
          </div>
          <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-white px-[12px] py-[8px] gap-x-2 mt-6'>
          <FcGoogle/>
            Sign Up with Google
          </button>
        </div>
        <div className='relative w-11/12 max-w-[450px] '>
            <img
            src={frameImage}
            alt='pattern'
            height={504}
            width={558}
            loading='lazy'
            />
            <img
            src={image}
            alt='Students'
            height={490}
            width={558}
            loading='lazy'
            className='absolute -top-4 right-4 '
            />
        </div>
    
    </div>
  )
}

export default Template