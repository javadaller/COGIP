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

    </>
  );
};
