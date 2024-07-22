import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGooglePlus, FaYoutube, FaPinterest, FaRss} from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import img from './../../public/assets/Images/lowerBody.png'
export default function Footer() {


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




    return (
        <div>
            <footer>
            <div className='div-footer'>
    <h2>WORK BETTER IN YOUR COMPANY</h2>
<img src={img} alt="img" />
</div>
<section>
                <hr/>
</section>
                <div className='footerTop'>
                    <div className='footerLogo'>COGIP</div>
                    <div className='footerContacts'>
                    
                        <p className='p'>
                            <span style={{ marginRight: '8px' }}><FaLocationDot color="#f9de4e"/></span>
                                Square des Martyrs, 6000 Charleroi
                        </p>
<section className='section'>
    <p className='p'>
        <span style={{ marginRight: '8px' }}><FaPhoneAlt color="#f9de4e" /></span>
        (123) 456-7890
    </p>
    <p className='p'>
        <span style={{ marginRight: '8px' }}><FaPrint color="#f9de4e" /></span>
        (123) 456-7890
    </p>
                        </section>

                        <div className='socialIcons'>
                            <span className='span'>Social Media</span>
                            {socialMediaIcons.map((icon, index) => (
                                <span key={index} aria-label={icon.label} title={icon.label}>
                                    {icon.component}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <section>
                <hr className='hr1'/>
                </section>
                <div className='footerBottom'>
                    <ul className='footerLinks' >
                        <li>HOME</li>
                        <li>INVOICES</li>
                        <li>COMPANIES</li>
                        <li>CONTACTS</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                    <div className='div'> &copy; 2022 •
                        COGIP Inc.

                        </div>
                </div>
            </footer>
        </div>
    )
    }

