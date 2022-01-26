import React, { useState } from 'react';

function LoginForm({Login , error}) {
    const [details, setDetails] = useState({email: '',password: ''});

    const submitHandler = e=>{
        e.preventDefault();
        document.getElementById('submit').click();
        Login(details)
    }

  return <div className='container'>
      <form className='d-flex m-auto' onSubmit={submitHandler} style={{ width:'50%'}}>
          <div className="col">
          <h2>Login</h2>
          <div className="" style={{boxSizing: 'border-box'}}>
          <input className='form-control' type="email" name="email" id="email" placeholder='Email' onChange={(e) => setDetails({...details, email: e.target.value})} value={details.email} /><br />
          </div>
          <div className="">
          <input className='form-control' type="password" id='password' placeholder='Password' onChange={(e) => setDetails({...details, password: e.target.value})} value={details.password} /><br />
          <input className='btn btn-primary' type="submit" value="Submit" id='submit'/>
          </div>
          </div>
      </form>
  </div>;
}

export default LoginForm;
