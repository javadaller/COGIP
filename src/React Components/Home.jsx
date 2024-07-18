import img from "../../Assets/Images/homeImg.png";
import rectangleblanc from "../../Assets/Images/rectangleblanc.png";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div>
            <h1>COGIP</h1>
            <ul>
              <li>Home</li>
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
        <img src={rectangleblanc} alt="Home illustration" />
        </div>
      </header>

      <body>
        <section className="main-container">
        <h2>Last invoices</h2>
        </section>
      </body>

    
    </>
  );
}
