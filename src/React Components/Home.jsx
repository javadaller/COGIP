
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

    const h2 = {
        fontSize: '50px',
        fontWeight: 'bold',
        marginBottom: '30px',
        marginLeft: '80px',
    };

    const imageContainer = {
        display: 'flex',
        position: 'relative',
        background: '#f9de4e',
        padding: '50px 20px',
        height: '90vh',
    };

    const imgStyle = {
        maxWidth: '50%',
        marginRight: '10px',
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
                        <li style={li}>Invoices</li>
                        <li style={li}>Companies</li>
                        <li style={li}>Contacts</li>
                    </ul>
                </div>
                <div style={div}>
                    <button style={btn1}>Sign up</button>
                    <button style={btn}>Login</button>
                </div>
            </nav>

//                 <div style={imageContainer}>
//                 <h2 style={h2}>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</h2>
//                     <img src={img} alt="Home illustration" style={imgStyle} />
//                 <img src={overlayImg} style={overlayStyle} alt="" />
//                 </div>
//         </>
    );
}
