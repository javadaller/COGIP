import React from 'react';

const Companies = () => {
    return (
        <body>
        <section className="test">
        <h1>All Companies</h1>
        <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>TVA</th>
                          <th>Country</th>
                          <th>Type</th>
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
    )
}

export default Companies;