import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contact-content">
        <h1>Kevin Jay Dela Cruz</h1>
        <h2>Software Ninja</h2>

        <br />
        <br />
        
        <table cellSpacing="0">
          <tbody>
            <tr>
              <td className="fieldName"><b>Date of Birth</b></td>
              <td>February 28, 1992</td>
              <td className="fieldName"><b>Mobile</b></td>
              <td><a href="tel:+639778140228" taget="_blank">+63 977 814 0228</a></td>
            </tr>
            <tr>
              <td className="fieldName"><b>Email</b></td>
              <td><a href="mailto:kj_delacruz28@yahoo.com" taget="_blank">kj_delacruz28@yahoo.com</a></td>
              <td className="fieldName"><b>Address</b></td>
              <td>Makati, Philippines</td>
            </tr>
            <tr>
              <td className="fieldName"><b>Skype</b></td>
              <td>nivekyaj09</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Contact
