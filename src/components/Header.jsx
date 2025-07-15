import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    onAuthStateChanged( auth, (user) => {//works eveytie the page loafs because of the useeffect
      //useNavigate can only be used in context of <router? component and currently we are out of it, hence we have to use it somewhere that's always there, hence header
      if(user){ //signin/up
        const {uid, email, displayName, photoURL} = user
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL : photoURL
        }))
        navigate("/browse")
      } else {//out
        dispatch(removeUser())
        navigate("/")
      }
    })
  }, [])

  return (
    <div className='absolute w-screen px-3 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40'
      src = {LOGO}
      alt = "logo"
      />
      {user && <div className='flex p-2'>
        <img className='w-12 h-12 p-1'
        src = {user.photoURL}
        alt = "user icon"
        />
        <button onClick={handleSignOut} className='text-white cursor-pointer'>Sign out</button>
      </div>}
    </div>
  )
}

export default Header