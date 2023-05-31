import React, {createContext, useEffect, useState} from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    console.log(user)
    


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }   
    }, []);

    const logout = async () => {
        try {
            // const res = await axios.post("http://127.0.0.1:8000/accounts/api_logout/");
            setUser({random:''});
            localStorage.removeItem('user');
        } catch(err) {
            console.error(err);
        }

    };

    return (
        <AuthContext.Provider value={{user, setUser, logout}} >
            {props.children}
        </AuthContext.Provider>
    )
}
