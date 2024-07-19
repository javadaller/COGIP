// App.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './../../public/assets/css/style.css';
import rectangleblanc from "../../Assets/Images/rectangleblanc.png";
import img from "../../Assets/Images/homeImg.png";

function App() {
  return (
    <div>
      <header>
        <nav>
          <div>
            <h1>COGIP</h1>
            <ul>
            <Link to="/">
              <li>Home</li>
              </Link>
              <Link to="/invoices">
                <li>Invoices</li>
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


        <div className="container">
        <h2>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</h2>
        <div className="image-container">
          <img src={img} alt="Home illustration" />
        </div>
      </div>
        <div className="rectangle-container">
            <img src={rectangleblanc} alt="Rectangle blanc" />
          </div>
      </header>
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
    </div>
  );
}

export default App;
