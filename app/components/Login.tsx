"use client"


import React from 'react'
import { useEffect, useState } from 'react';
// import client from './lib/contentful';

const Login = () => {
    const [isBearerToken, setIsBearerToken] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [data, setData] = useState([]);
    useEffect(() => {
      const func = async () => {
        setIsBearerToken(localStorage.getItem("bearer_token"));
    
        if (!isBearerToken) return;
    
        const apiResp = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: isBearerToken,
          },
        });
    
        const data1 = await apiResp.json();
        console.log("data from use Effect", data1);
      };
    
      func();
    }, [isBearerToken]);

    
    const onLoginHandler = async () => {
      const apiResp = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "username": "atuny0",
          "password": "9uQFF1Lh"
          // expiresInMins: 60, // optional
        }),
      });
    setIsLoggedIn(true)
      const data1 = await apiResp.json();
      console.log(data1);
     
      localStorage.setItem("bearer_token", data1.token);
      setIsBearerToken(data1.token);
    }

    
      

   

return (
    <button
        onClick={onLoginHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button> 
)
}

export default Login
