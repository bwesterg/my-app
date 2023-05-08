
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>   
      <Router>
        <Navbar />
        <Link>
          <Routes>
            <Route path='/' exact ></Route>
          </Routes>
        </Link>
      </Router>
    </>

  );
}

export default App;
