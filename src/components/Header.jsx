import React from 'react'
import {NETFLIX_LOGO,SIGNOUT_LOGO} from "../utils/constant"
import {auth} from "../utils/firebase"
import { signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { onAuthStateChanged} from "firebase/auth"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'



const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
     navigate("/error")
    });
    
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email,  displayName: displayName}))
        navigate("/browse")
      } else {
       dispatch(removeUser());
       navigate("/")
      }
    });
   },[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between'>
  <img 
  className='w-44'
  src={NETFLIX_LOGO} alt="" />
  { user &&
    <div className='flex items-center '>
    <img src={SIGNOUT_LOGO} alt="" />
    <button onClick={handleSignOut} className='text-lg text-white font-bold'>{user.email}</button>
  </div>
  }
    </div>
  
  )
}
export default Header