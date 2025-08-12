import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { toggleGptSearchView, clearGptMovieResult } from '../utils/gptSlice.js';
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
    const unsubscribe = onAuthStateChanged( auth, (user) => {//works eveytie the page loafs because of the useeffect
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
    
    //unsubcribe when component unmounts.
    return () => unsubscribe();
  }, [])

  const handleGptSearch = () => {
    if (showGptSearch) {
    dispatch(clearGptMovieResult());
  }
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(changedLang(e.target.value))
  }

  return (
    <div className='absolute w-screen px-3 py-2 bg-gradient-to-b from-black z-10 flex flex-col sd:flex-row md:flex-row justify-between'>
      <img className='w-40 p-5 mx-auto sd:mx-0 md:mx-0'
      src = {LOGO}
      alt = "logo"
      />
      {user && (
        <div className='flex -mt-9 md:p-2' >
        <button className='px-3 mb-15 md:mb-6 md:mt-10 md:px-6 md:mr-2 bg-red-600 rounded cursor-pointer hover:bg-red-700'
          onClick={handleGptSearch}
        >{showGptSearch ? "Home": "GPT search"}
        </button>
        <div className='ml-[50%] m-4 -mt-1 flex flex-row md:mt-5 md:flex-col md:m-0'>
        <img className='w-7 h-7 md:w-13 md:h-13 md:p-1 md:mt-4 rounded-lg cursor-pointer'
        src = {user.photoURL}
        alt = "user icon"
        />

        <button onClick={handleSignOut} className='text-white cursor-pointer text-sm mt-6 -ml-7 -mr-5 md:mt-0 md:-ml-1 md:-mr-0'>Sign out</button>
        {user &&  showGptSearch && <select className='mb-8 ml-[30%] text-white rounded-lg md:mb-0 md:p-1 md:-ml-[5%]' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
          </select>}
        </div>
        
      </div>
      )}
    </div>
  )
}

export default Header