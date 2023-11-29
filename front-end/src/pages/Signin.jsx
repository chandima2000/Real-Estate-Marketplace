import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';

function SignIn() {
    
    const [formData, setFormData] = useState({email:'',password:'' });
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange =(e) =>{
            setFormData({
                ...formData,
                [e.target.id]:e.target.value,
            });
    }
    const handleSubmit = async (e)=>{
       e.preventDefault(); 

  try{
       const res =  await fetch('/user/auth/signin',
       {
        method : 'POST',
        headers : {
            'Content-Type' : "application/json",
        },
        body : JSON.stringify(formData),
       });
       if(!res.ok){
            const errorData = await res.json();
            console.error('Sign-in failed:', errorData.message);
            alert("User Name or Password Incorrect, Try Again",errorData.message)
       }
       else{
            const data=await res.json();
            console.log(data);
            navigate('/');
       }}
       catch(error){
            HTMLFormControlsCollection.error("Error ",error.message);
       }
      
    };

    return ( 
        
        <div className="p-3 max-w-lg mx-auto"> 
            <h1 className="text-3xl text-center my-7 text-slate-950 font-bold">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email"onChange={handleChange}/>
                <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password"onChange={handleChange}/>
                <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 ">
                    {loading ? 'Loading...' : 'Sign In'} </button>
            </form>
            <div className="flex flex-row gap-2 mt-3">
                <p>Dont Have an account?</p>
                <Link to = {"/sign-Up"}><span className="text-blue-700 font-bold">Sign Up</span></Link>
            </div>
        </div>

     );
}

export default SignIn;