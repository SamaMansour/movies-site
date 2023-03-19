import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/authAction'
import axios from "axios";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  ChakraProvider,
  CSSReset,
  Box 
} from '@chakra-ui/react'


const RegisterForm = (props) => {
 
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');


  
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);


  const dispatch = useDispatch();

  const handleSignup = (username, password) => {
    console.log("hello");
    //dispatch(signUp(username, password));
    axios.post("http://localhost:1337/auth/signup", 
    {
    "email": username,
    "password": password

    },
     {}

)
    console.log("done");
      

    };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={12}>
      <h2> Signup </h2>
      <form onSubmit= {handleSignup(username, password)}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" data-testid="username" placeholder="test-username" value={username} onChange={handleUsernameChange} />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" data-testid="password" placeholder="*******"  value={password} onChange={handlePasswordChange} />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Register
          </Button>
      </form>
    </Box>
    </ChakraProvider>
  )
};

export default RegisterForm;