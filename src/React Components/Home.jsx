
import img from "../../Assets/Images/homeImg.png";
import rectangleblanc from "../../Assets/Images/rectangleblanc.png";
import { Link } from 'react-router-dom';


export default function Home() {



    const nav = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        background: '#f9de4e',
        color: 'black',
    };

    const navSection = {
        marginTop: '50px',
        display: 'flex',
        alignItems: 'center',
    };

    const h1 = {
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '80px',
        marginTop: '30px',

    };

    const ul = {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        margin: '0 60px',
        padding: '0',
    };

    const li = {
        cursor: 'pointer',
        padding: '5px 10px',
    };

    const homeLi ={
        marginLeft: '10px',
        padding: '5px 10px',
        background: '#f9de4e',
        border: '1px solid black',
    }

    const div ={
        marginTop: '50px',
        marginRight: '100px',
    }


    const btn1 = {
        marginLeft: '10px',
        padding: '5px 15px',
        background: 'white',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
    };

    const btn ={
        marginLeft: '10px',
        padding: '5px 15px',
        background: '#f9de4e',
        border: 'none',
        cursor: 'pointer',
    }
    const mainContainer = {
        display: 'flex',
        alignItems: 'center',
        background: '#f9de4e',
        padding: '50px 20px',
        height: '100vh',
    };

    const h2 = {
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '30px',
        marginLeft: '80px',
    };

    const imageContainer = {
        display: 'flex',
        alignItems: 'center',
        width: '170%',
    };

    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
    };

    return (
        <>
            <nav style={nav}>
                <div style={navSection}>
                    <h1 style={h1}>COGIP</h1>
                    <ul style={ul}>
                        <li style={homeLi}>Home</li>
                        <Link to="/invoices">
                        <li style={li}>Invoices</li>
                        </Link>
                        <Link to="/compagny">
                        <li style={li}>Companies</li>
                        </Link>
                        <Link to="/contact">
                        <li style={li}>Contacts</li>
                        </Link>
                    </ul>
                </div>
                <div style={div}>
                <Link to="/sign-up">
                    <button style={btn1}>Sign up</button>
                    </Link>
                    <Link to="/login">
        <button style={btn}>Login</button>
      </Link>
                    
                </div>
            </nav>

            <div style={mainContainer}>
                <h2 style={h2}>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</h2>
                <div style={imageContainer}>
                    <img src={img} alt="Home illustration" style={imgStyle} />
                </div>
            </div>
        </>
    );
}
