import React, { useState } from 'react';

function LoginForm({Login , error}) {
    const [details, setDetails] = useState({email: '',password: ''});

    const submitHandler = e=>{
        e.preventDefault();
        Login(details)
    }

  return <div className='container'>
      <form onSubmit={submitHandler}>
          <h2>Login</h2>
          <div className="my-2" style={{boxSizing: 'border-box'}}>
          <input  type="email" name="email" id="email" placeholder='Email' onChange={(e) => setDetails({...details, email: e.target.value})} value={details.email} /><br />
          </div>
          <div className="my-2">
          <input type="password" id='password' placeholder='Password' onChange={(e) => setDetails({...details, password: e.target.value})} value={details.password} /><br /><br />
          <input type="submit" value="Submit" />
          </div>
      </form>
  </div>;
}

export default LoginForm;
