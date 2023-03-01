import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import styled from "styled-components"


const Header = () => {
  const Container = styled.div `
    position: relative;
    width: 100%;
    background-color: #50607f;
    min-height: 50vh;
  `
  return (
    <>
    <Container>
      <div class="container py-5 text-center">
          <SearchBox/>
      </div>
    </Container>

    </>
  )
}

export default Header