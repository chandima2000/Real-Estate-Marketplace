import React from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import {useDispatch} from 'react-redux';
import { signInSuccess } from '../app/user/userSlice';
import {useNavigate} from 'react-router-dom';
 
export default function OAuth() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {
        try{ 
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider);
            const res = await fetch('/auth/google',{
                method : 'POST' ,
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    name : result.user.displayName,
                    email : result.user.email,
                    photo : result.user.photoURL
                }),
            });
            const data = await res.json();

            //console.log(data)
           // Instead of this console log or any error use dispatch.
            dispatch(signInSuccess(data));
            navigate('/');
        }
        catch(error){
            console.log("Could not sign in with google",error);
        }
    };

  return (
    <button 
        onClick={handleGoogleClick} 
        type='button' 
        className='bg-red-700 p-3 rounded-lg uppercase text-white
        hover:opacity-80'>Continue with google</button>
  );
}
