import React from 'react';
import { Link } from 'react-router-dom'; 
import img from '../../Assets/Images/homeImg.png'; 

const Invoices = () => {
  return (
    <>

<body>
<section className="test">
<h1>All Invoices</h1>
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
</body>
   
      
   
    </>
  );
};

export default Invoices;
