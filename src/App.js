import { useState } from 'react';
//import DoctorDash from './components/doctorDash'
import LoginForm from './components/LoginForm'
import './App.css';


function App() {

  const adminUser = [
      {email:'admin@test.com',
      password: 'admin'}
  ]

  const [user, setUser] = useState({email: '',password: ''});
  const [error, setError] = useState("");
  var userId = null;

  const Login= details =>{
    
    for(var i = 0; i<adminUser.length;i++){
      if(adminUser[i].email === details.email && adminUser[i].password === details.password){
        userId = i;
        console.log('Value of I ', i)
      }
    }

    //if(details.email === adminUser.email && details.password === adminUser.password){
    if(false){
      console.log('logged in!')
      setUser({
        email:adminUser[userId].email,
        password: adminUser[userId].password
      })
    }else{
      document.getElementById('password').classList.add('error');
      document.getElementById('email').classList.add('error');

      setTimeout(() => {
        document.getElementById('password').classList.remove('error');
        document.getElementById('email').classList.remove('error');
      }, 500);

    }
  }

  const Logout = ()=>{
    setUser({
      email:'',
      password: ''
    })
  }

  return (
    <div className="App">
      {(user.email !== '')?(
        <div className="welcome">
          <h2>Welcome, <span>{user.email}</span></h2>
          <button className='btn btn-secondary' onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
