import React from 'react';

const contactStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

function Contact(props) {
    return (
        <div style={contactStyle}>
          <h1>Contact</h1>

          <ul>
            <li> <a href="/contact/michael">Michael</a> </li>
            <li> <a href="/contact/john">John</a> </li>
            <li> <a href="/contact/jane">Jane</a> </li>
          </ul>
        </div>
    );
}

export default Contact;
