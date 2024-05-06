import React from 'react'
import Logo from './Logo'
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/userSlice';
import summaryApi from '../common/index';



const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch();

  const headerLogout = async () => {
    try {
      const fetchData = await fetch(summaryApi.logouts.url, {
        method: summaryApi.logouts.method,
        credentials: 'include',
      });
      const data = await fetchData.json();

      if (data.success) {
        toast.success(data.success);
        dispatch(setUserData(null));
      }
      if (data.error) {
        toast.error(data.error);
      }
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Failed to log out. Please try again later.');
    }
  };

  return (
    <header className='h-16 shadow-md bg-white'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
              <div >
                <Link to='/'>
                <Logo/>
                </Link>
              </div>

              <div className=' hidden  lg:flex items-center  w-full  justify-between  max-w-sm border rounded-full focus-within:shadow pl-1'>
                <input type='text' placeholder='Serach...' className='w-full outline-none ' />
                <div className='text-lg min-w-[50px] h-8  bg-red-600 flex items-center  justify-center rounded-r-full text-white' >
                  <FiSearch/>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                   <div className='text-3xl cursor-pointer'>
                   {
                    user?.profilepic?(
                      <img src={user?.profilepic} alt={user?.name} className='h-10 w-10 rounded-full'/>
                    ) :(
                      <FaRegCircleUser />
                    ) 
                   }
                     
                  </div>

                  <div className='text-2xl relative'>
                       <spam><FaCartShopping /></spam>
                       <div  className='bg-red-600 w-4 h-4 rounded-full p-1 text-white flex items-center justify-center absolute -top-2 -right-2' >
                       <p className='text-sm cursor-pointer'>0</p>
                       </div>
                  </div>

                  <div>
            {user?._id ? (
              <button onClick={headerLogout} className="px-2 py-1 bg-red-600 rounded-full text-white hover:bg-red-700">
                Logout
              </button>
            ) : (
              <Link to="/login" className="px-2 py-1 bg-red-600 rounded-full text-white hover:bg-red-700">
                Log In
              </Link>
            )}
          </div>
              </div>
        </div>
    </header>
  )
}

export default Header