import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGooglePlus, FaYoutube, FaPinterest, FaRss} from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
export default function Footer() {

    const footer = {
        textAlign: 'center',
        padding: '20px',
        background: '#fff',
        color: '#555',
    };

    const hr ={
        width: '80%',
        marginTop: '20px',
        marginBottom: '20px',
        border: 'none',
        height: '2px',
        backgroundColor: '#f9de4e',
    }

    const hr1 ={
        width: '80%',
        marginTop: '20px',
        marginBottom: '20px',
        border: 'none',
        height: '2px',
        backgroundColor: '#e7f2fe',
    }

    const footerTop = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px 0',
    };

    const footerBottom = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
    };

    const footerLogo = {
        marginBottom: '80px',
        border: '5px solid #f9de4e',
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'black',
        padding: '3px 6px',
    };

    const footerContacts = {
        textAlign: 'left',
    };

    const span ={
        color: 'black',
    }

    const socialIcons = {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        color: '#f9de4e',
    };

    const footerLinks = {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        padding: '0',
        marginLeft: '110px',
        };

    const socialMediaIcons = [
        { component: <FaFacebook />, label: 'Facebook' },
        { component: <FaTwitter />, label: 'Twitter' },
        { component: <FaLinkedin />, label: 'LinkedIn' },
        { component: <FaInstagram />, label: 'Instagram' },
        { component: <FaGooglePlus />, label: 'GooglePlus' },
        { component: <FaYoutube />, label: 'YouTube' },
        { component: <FaPinterest />, label: 'Pinterest' },
        { component: <FaRss />, label: 'RSS' },
    ];

    const div = {
        marginRight: '110px',
        display: 'flex',
        alignItems: 'center',
    }

    const section = {
        display: 'flex',
        marginTop: '1px',
        flexDrirection: 'row',
        marginBottom: '40px',
        alignItems: 'flex-start',
        gap: '20px',
    }

    const p = {
        marginRight: '50px',
    }



    return (
        <div>
            <footer style={footer}>
                <hr style={hr} />
                <div style={footerTop}>
                    <div style={footerLogo}>COGIP</div>
                    <div style={footerContacts}>
                    
                    <p>
    <span style={{ marginRight: '8px' }}><FaLocationDot color="#f9de4e"/></span>
    Square des Martyrs, 6000 Charleroi
</p>
<section style={section}>
    <p style={p}>
        <span style={{ marginRight: '8px' }}><FaPhoneAlt color="#f9de4e" /></span>
        (123) 456-7890
    </p>
    <p>
        <span style={{ marginRight: '8px' }}><FaPrint color="#f9de4e" /></span>
        (123) 456-7890
    </p>
                        </section>

                        <div style={socialIcons}>
                            <span style={span}>Social Media</span>
                            {socialMediaIcons.map((icon, index) => (
                                <span key={index} aria-label={icon.label} title={icon.label}>
                                    {icon.component}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <hr style={hr1} />
                <div style={footerBottom}>
                    <ul style={footerLinks}>
                        <li>HOME</li>
                        <li>INVOICES</li>
                        <li>COMPANIES</li>
                        <li>CONTACTS</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                    <div style={div}> &copy; 2022 •
                        COGIP Inc.

                        </div>
                </div>
            </footer>
        </div>
    )
    }

