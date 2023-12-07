import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import OAuth from "../components/OAuth";

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ });
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const handleChange =(e) =>{
            setFormData({
                ...formData,
                [e.target.id]:e.target.value,
            });
    };
    const handleSubmit = async (e)=>{
       e.preventDefault(); 
       try{
        setLoading(true);
        const res =  await fetch('/user/auth/signup',{
        method : 'POST',
        headers : {
            'Content-Type' : "application/json",
        },
        body : JSON.stringify(formData),
       });
       const data=await res.json();
       console.log(data);
       if(data.success == false){
        setLoading(false);
        setError(data.message);
        return;
       }
       setLoading(true);
       setError(null);
       navigate('/sign-in');
    }
    catch(error){
        setLoading(false);
        setError(error.message);
    }
  };
    return ( 
        
        <div className="p-3 max-w-lg mx-auto"> 
            <h1 className="text-3xl text-center my-7 text-slate-950 font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" onChange={handleChange}/>
                <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email"onChange={handleChange}/>
                <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password"onChange={handleChange}/>
                <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 ">Sign Up</button>
                <p className="text-center">---OR---</p>
                <OAuth/>
            </form>
            <div className="flex flex-row gap-2 mt-3">
                <p>Have an account?</p>
                <Link to = {"/sign-in"}><span className="text-blue-700 font-bold">Sign In</span></Link>
            </div>
            
        </div>

     );
}

export default SignUp;