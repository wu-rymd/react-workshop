import React from 'react';
import {useParams} from 'react-router-dom';

const contactDetailStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

function ContactDetail(props) {
    let {name} = useParams();
    return (
        <div style={contactDetailStyle}>
          <h1> Contact </h1>
          <p> { name } </p>
          <p> p: +1 234 567 8901 </p>
          <p> e: {name}@example.com </p>
          <a href="/contact">Back to list</a>
        </div>
    );
}

export default ContactDetail;
