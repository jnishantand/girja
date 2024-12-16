// LoginPage.js
import React, { useState } from 'react';



import { useNavigate } from 'react-router-dom';

function LoginPage() {
      const [name,setName]=useState('');
      const [password,setPassword]=useState('');
      const [messgae,setMessage]=useState('');
      const [success,setSuccess]=useState('');
      const [reset,setReset]=useState('Reset');

  const navigate = useNavigate(); // React Router hook to navigate

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };



const handleLogin=(e)=>{
  e.preventDefault();
  if(!name || !password){
 
     setMessage("Please enter corrrect entreies.")
     setSuccess("");
     return
  }

  if(name==='test' && password==="123"){
    setMessage("")
     setSuccess("OK");
     navigate("/");

  }else{
    setMessage("Please enter corrrect entreies.")
    setSuccess("");
  }
}

const nagigateToReset=()=>{
navigate("/reset");

}


  return (
    <div className='App'>
        <form onSubmit={handleLogin}>

        <div>
     <label>LoginPage:</label>
        <div>

        <label>Name</label>
        <input required type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter your username" />
       
        </div>

     <label>Password</label>
     <input required placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)} ></input>
     </div>
        <button onClick={handleLogin}>Login</button>

     <button onClick={handleSignupClick}>Go to Sign Up</button>
     {<p onClick={nagigateToReset} className="reset">{reset}</p>}
     {messgae && <p className="error">{messgae}</p>}
     {success && <p className="success">{success}</p>}
        </form>
    </div>
  );
}

export default LoginPage;
