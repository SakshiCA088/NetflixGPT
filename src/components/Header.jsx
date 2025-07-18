import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { changedLang } from '../utils/configSlice.js';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(changedLang(e.target.value))
  }

  return (
    <div className='absolute w-screen px-3 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40 p-5'
      src = {LOGO}
      alt = "logo"
      />
      {user && (
        <div className='flex p-2 justify-between' >
         {showGptSearch && <select className='p-2 m-2 mb-4 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
          </select>}
        <button className=' px-3 mb-4 mt-3 mr-2 bg-red-600 rounded cursor-pointer hover:bg-red-700'
          onClick={handleGptSearch}
        >{showGptSearch ? "Home": "GPT search"}
        </button>

        <img className='w-12 h-12 p-1  rounded-lg cursor-pointer'
        src = {user.photoURL}
        alt = "user icon"
        />

        <button onClick={handleSignOut} className='text-white cursor-pointer'>Sign out</button>
      </div>
      )}
    </div>
  )
}

export default Header