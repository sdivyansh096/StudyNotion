import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/Logo.svg";
import { toast } from 'react-hot-toast';
const Navbar = (props) => {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-around items-center w-11/12 max-width{1100px} py-4 mx-auto'>
       <Link to="/">
     <img src={logo} alt='logo' width={160} height={32 } loading='lazy'/>
     </Link>
       <nav>
        <ul className='text-white flex gap-x-6'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/" >About</Link></li>
          <li><Link to="/">Contact </Link> </li>
        </ul>
        </nav> 
        <div className='flex items-center gap-x-4'>
          { !isLoggedIn &&
            <Link to={"/login"}>
            <button className='bg-slate-950 text-white py-{8px} px-{12px} rounded-{8px} border border-slate-950'>Log in</button>
            </Link>
          }
          { !isLoggedIn &&
            <Link to={"/signup"}>
            <button className='bg-slate-950 text-white py-{8px} px-{12px} rounded-{8px} border border-slate-950'>Sign up</button>
            </Link>
              
          }
          { isLoggedIn &&
            <Link to={"/"}>
            <button className='bg-slate-950 text-white py-{8px} px-{12px} rounded-{8px} border border-slate-950' onClick={()=>{
              setIsLoggedIn(false);
              toast.success("Logout");
            }}>Logout</button>
            </Link>
            
          }
          { isLoggedIn &&
            <Link to={"/dashboard"}>
            <button className='bg-slate-950 text-white py-{8px} px-{12px} rounded-{8px} border border-slate-950'>Dashboard</button>
            </Link>            
          }
        </div>
    </div>
  );
};

export default Navbar;