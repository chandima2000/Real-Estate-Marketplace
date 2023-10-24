import React from "react";
import {Link} from 'react-router-dom';

function SignUp() {
    return ( 
       
        <div className="p-3 max-w-lg mx-auto"> 
            <h1 className="text-3xl text-center my-7 text-slate-950 font-bold">Sign Up</h1>
            <form className="flex flex-col gap-4">

                <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username"/>
                <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email"/>
                <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password"/>
                <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 ">Sign Up</button>
            </form>
            <div className="flex flex-row gap-2 mt-3">
                <p>Have an account?</p>
                <Link to = {"/sign-in"}><span className="text-blue-700 font-bold">Sign In</span></Link>
            </div>
        </div>

     );
}

export default SignUp;