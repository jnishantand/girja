// SignupPage.js

import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';



function SignupPage() {

  const navigate = useNavigate(); // React Router hook to navigate

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const[succsess,setSuccess]=useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    
    
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
      <h2>Sign Up Page</h2>
        <div>
         <div>
         <label>User Name:</label>
         </div>
          <input required type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter your username" />
        </div>
        <div>
        <div>
        <label>Password:</label>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        required
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{ paddingRight: '40px' }}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          color: '#555',
        }}
      >
        {showPassword ? '🙈' : '👁️'}
      </span>
    </div>
        </div>
        <button type="submit">Sign Up</button>
        <button type="button" onClick={onsuccess}>Login</button>
        
        {error && <p className="error">{error}</p>}
        {succsess && <p className="success">{onsuccess}</p>}
      </form>
    </div>
  );
}

export default SignupPage;
