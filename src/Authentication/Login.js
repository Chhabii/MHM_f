// import React,{useState,useContext} from 'react'
// import axios from 'axios';
// import {AuthContext} from '../AuthContext';
// import {useNavigate} from 'react-router-dom';

// const Login = () => {
//   const {setUser} = useContext(AuthContext);
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [error,setError] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try{
//       const res = await axios.post('/accounts/api_login/',{email,password})
//       console.log(res.data);
//       setUser(res.data);
//       localStorage.setItem('user',JSON.stringify(res.data))
//       navigate('/');
//     } catch(err){
//       setError(err.response.data);
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value) }/>
//       <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
//       <button type='submit'>Login</button>
//       {error && <p>{error}</p>}
//     </form>
//   )
// }

// export default Login

import React,{useState,useContext} from 'react'
import axios from 'axios';
import {AuthContext} from '../AuthContext';
import {useNavigate} from 'react-router-dom';
import './Login.css';
const Login = () => {
  const {setUser} = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post('/accounts/api_login/',{email,password})
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem('user',JSON.stringify(res.data))
      navigate('/');
    } catch(err){
      setError(err.response.data);
    }
  }
  
  return (
    <div className='login'>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Login</h2>
        <label className="login-form__label">Email</label>
        <input className="login-form__input" type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value) }/>
        <label className="login-form__label">Password</label>
        <input className="login-form__input" type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
        <button className="login-form__button" type='submit'>Login</button>
        {error && <p className="login-form__error">{error}</p>}
      </form>
    </div>
  )
}

export default Login
