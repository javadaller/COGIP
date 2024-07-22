// App.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import './../../public/assets/css/style.css'; 
import img from './../../public/assets/Images/homeImg.png';
import imgOverlay from "./../../public/assets/Images/rectangleblanc.png";


function App() {
  return (
    <div>
      <header>
        <nav>
          <div>
            <h1>COGIP</h1>
            <ul>
            <Link to="/">
              <li className='homeLi'>Home</li>
              </Link>
              <Link to="/invoices">
              </Link>
              <Link to="/companies">
                <li>Companies</li>
              </Link>
              <Link to="/contact">
                <li>Contacts</li>
              </Link>
            </ul>
          </div>
          <div>
            <Link to="/sign-up">
              <button className="btn1">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="btn2">Login</button>
            </Link>
          </div>
        </nav>
        
        <div className='headerContainer'>
          <h2>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</h2>
                <div className='imageContainer'>
                <img src={img} alt="Home illustration"/>
                </div>
        </div>
                <img className='imgOverlay' src={imgOverlay} alt="overlay" />
              
      </header>
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>

      <Footer/>
    </div>
  );
}

export default App;
