import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, HookForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { signIn } from '../store/actions/authAction';

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


const SigninForm = (props) => {

  
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = (username, password) =>{
    dispatch(signIn(username, password));
    navigate("/");

  }


  return (
   <>
      <CSSReset />
      <Box p={12}>
        <h2> Login </h2>
        <form onSubmit = {()=> handleLogin(username, password)}>
        <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="test-username" value={username} onChange={handleUsernameChange} />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******"  value={password} onChange={handlePasswordChange} />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Login
            </Button>
        </form>
    </Box>
   </>
  )
};

export default SigninForm;