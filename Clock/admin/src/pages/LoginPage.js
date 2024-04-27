import "../styles/App.css";

import { useGoogleLogin } from '@react-oauth/google';
import {Box, Button} from '@mui/material/';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function LoginPage() {
  const [loggedin, setLoggedin] = useState(false);

  const login = useGoogleLogin({
        onSuccess: (codeResponse) => {axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {})
          .then((res) => {
              // console.log(res);
              sessionStorage.setItem('token', res.data.id);
              console.log(sessionStorage.getItem('token'));
              setLoggedin(true);
            })
          .catch((err) => console.log(err));},
        onError: (error) => console.log('Login Failed:', error)
    });
  
  return (
      <div className="App">
        <Box sx={{height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
          <div>
            {loggedin ? <Navigate to="/home" /> : <Button variant="contained" color="primary" onClick={login}>Login</Button>}
          </div>
        </Box>
      </div>
    );
    /**/

    return "do later";
  }
  
  export default LoginPage;