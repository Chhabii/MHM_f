import React,{useState,useContext} from 'react'
import axios from 'axios';
import {AuthContext} from '../AuthContext';
import {useNavigate} from 'react-router-dom';
import './Login.css';


const Login = () => {
  
  const {setUser,setToken} = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post('/accounts/api_login/',{email,password})
      setToken(res.data.token);
      localStorage.setItem('token',res.data.token);
      console.log(res.data);
      console.log(res.data.token);

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
        {error && <p className="login-form__error">{error.detail}</p>}
      </form>
    </div>
  )
}

export default Login
