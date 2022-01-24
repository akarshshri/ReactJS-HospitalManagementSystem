import { useState } from 'react';
//import DoctorDash from './components/doctorDash'
import LoginForm from './components/LoginForm'
import './App.css';
import LoggedIn from './components/LoggedIn';


function App() {

  const adminUser = [
      {email:'admin@test.com',
      password: 'admin'},
      {email:'staff@test.com',
      password: 'staff'},
      {email:'doctor@test.com',
      password: 'doctor'},

  ]

  const [user, setUser] = useState({email: '',password: ''});
 // const [error, setError] = useState("");
  const [userId, setuserId] = useState(undefined);
  var temp;
  //var userId = undefined;

  const Login= details =>{
    
    for(var i = 0; i<adminUser.length;i++){
      if(adminUser[i].email === details.email && adminUser[i].password === details.password){
        temp = i
        setuserId(temp);
      }
    }
    
    //console.log(userId);

    //if(details.email === adminUser.email && details.password === adminUser.password){
    if(temp === 0 || temp === 1 || temp === 2){
      //console.log(userId)
      setUser({
        email:adminUser[temp].email,
        password: adminUser[temp].password
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
    setuserId(undefined);
  }

  return (
    <div className="App">
      {(user.email !== '')?(
        <LoggedIn Logout = {Logout} user= {user} userId={userId} />
      ): (
        <LoginForm Login={Login}/>
      )}
    </div>
  );
}

export default App;
