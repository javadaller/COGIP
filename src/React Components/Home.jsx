import img from "../../Assets/Images/homeImg.png";
import rectangleblanc from "../../Assets/Images/rectangleblanc.png";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>

      <body>
      <div className="container">
        <h2>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</h2>
        <div className="image-container">
          <img src={img} alt="Home illustration" />
        </div>

      </div>
      <div className="rectangle-container">
        <img src={rectangleblanc} alt="Home illustration" />
        </div>



  <div class="main-container">
    <section class="test">
      <h2>Last invoices</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Invoice number</th>
              <th>Dates due</th>
              <th>Company</th>
              <th>Created at</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>F20220915-001</td>
              <td>15/09/2022</td>
              <td>Jouet Jean-Michel</td>
              <td>25/09/2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="test">
      <h2>Last contacts</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Contact name</th>
              <th>Position</th>
              <th>Company</th>
              <th>Contacted at</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>Manager</td>
              <td>Company XYZ</td>
              <td>15/09/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="test">
      <h2>Last compagnies</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Contact name</th>
              <th>Position</th>
              <th>Company</th>
              <th>Contacted at</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>Manager</td>
              <td>Company XYZ</td>
              <td>15/09/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</body>

<<<<<<< HEAD
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
=======
    </>
  );
};
>>>>>>> tom
