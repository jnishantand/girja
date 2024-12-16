// SignupPage.js
import '../App.css';
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';



function SignupPage() {

  const navigate = useNavigate(); // React Router hook to navigate

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const[succsess,setSuccess]=useState('');


    const onsuccess=()=>{
        
      navigate('/login'); 
    }



    const handleSignup=(e)=>{
      e.preventDefault();

if(!name || !password){
  return setError("fill all details");
}else{
  setError("");
}

if(name==="test" && password==="123"){
setSuccess('ok');
navigate('/home'); 
}else{
  setError("Wrong details!!");
}

    }


  return (
    <div className="App">
     
      <form onSubmit={handleSignup}>
      <h1>Sign Up Page</h1>
        <div>
          <label>Username:</label>
          <input required type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter your username" />
       
        </div>
        <div>
          <label>Password:</label>
          <input required type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        {succsess && <p className="success">{onsuccess}</p>}
      </form>
    </div>
  );
}

export default SignupPage;
