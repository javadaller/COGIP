import React from 'react';

const Contact = () => {
    return (
        <body>
        <section className="test">
        <h1>All Contacts</h1>
        <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Mail</th>
                          <th>Compay</th>
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

export default Contact;