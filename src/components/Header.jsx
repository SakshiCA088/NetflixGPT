import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-screen px-3 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40'
      src = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      alt = "logo"
      />
      {user && <div className='flex p-2'>
        <img className='w-12 h-12 p-1'
        src={user.photoURL}
        alt = "user icon"
        />
        <button onClick={handleSignOut} className='text-white cursor-pointer'>Sign out</button>
      </div>}
    </div>
  )
}

export default Header