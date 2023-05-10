
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>   
      <Router>
        <Navbar />
        <Link>
          <Routes>
            <Route path='/' exact element={<Home/>} /> 
            <Route path='/services' exact element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sign-up' element={<SignUp />} />

          </Routes>
        </Link>
      </Router>
    </>

  );
}

export default App;
