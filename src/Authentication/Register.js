import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/accounts/api_register/",{email,password});
            console.log(res.data);
            console.log(res.data.token);
            navigate('/login');

        } catch (err){
            if (err.response){
                setError(err.response.data)
                console.log(err.response.data)
            }
            else{
                console.log(err)
            }
        }
    };

    return (
        <div className='register'>
            <form className='register-form' onSubmit={handleSubmit}>
                <h2 className='register-form__title'>Register</h2>
                <label htmlFor='email' className='register-form__label'>Email</label>
                <input id='email' className='register-form__input' type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />

                <label htmlFor='password' className='register-form__label'>Password</label>
                <input id='password' className='register-form__input' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />

                <button className='register-form__button' type='submit'>Register</button>
                {error && <p className='register-form__error'>{error.detail}</p>}
            </form>
        </div>
    );
}

export default Register;
