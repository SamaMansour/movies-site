import React, { useEffect } from 'react';
import styled from 'styled-components';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

const SearchInput = ({ value, onChangeText ,onFormSubmit}) => {
  useEffect(()=>{
    let input = document.getElementById('search');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);
  },[])


  return (
    <form>
      <FormControl>
        <Input type='text'
        id='search' 
        placeholder='Search movie by name'
        value={value}
        onChange= {onChangeText}/>
      </FormControl>
    </form>
  )
}

export default SearchInput