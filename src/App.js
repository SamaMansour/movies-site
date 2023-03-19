import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './views/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/MovieDetail/Details';
import Popular from'./views/Popular';
import RegisterForm from './views/RegisterForm';
import SigninForm from './views/SigninForm';
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
	 const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('token')) || false
  );

  const setAuth = (value) => {
    setIsAuthenticated(value);
    //alert(value);
  };

  useEffect(()=>{
    localStorage.setItem("token", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Movies</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/popular">Popular</Nav.Link>
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/signup">Signup</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<BrowserRouter>
				<Routes>
					<Route
			          path="/"
			          element={isAuthenticated
			            ? <Home />
			            : <Navigate to="/login" replace />
			          }
        			/>
        			<Route
			          path="/popular"
			          element={isAuthenticated
			            ? <Popular />
			            : <Navigate to="/login" replace />
			          }
        			/>
					<Route path='/detail/:movieId' element={<Details/>}/>
					// <Route path='/popular' element={<Popular/>}/>
					<Route path='/signup' element={<RegisterForm/>}/>
					<Route path='/login' element={<SigninForm/>}/>


				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
