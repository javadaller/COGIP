import img from "../../Assets/Images/homeImg.png";
import rectangleblanc from "../../Assets/Images/rectangleblanc.png";



export default function Home() {
  return (

    
    <div className="home">
     
   
   
      
      <div className="main-container">
        
   
        <section className="test">
     
          <h2>Last invoices</h2>
          <div className="table-wrapper">
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

        <section className="test">
          <h2>Last contacts</h2>
          <div className="table-wrapper">
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

        <section className="test">
          <h2>Last compagnies</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Company name</th>
                  <th>Industry</th>
                  <th>Location</th>
                  <th>Joined at</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Company XYZ</td>
                  <td>Technology</td>
                  <td>San Francisco</td>
                  <td>15/09/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};
