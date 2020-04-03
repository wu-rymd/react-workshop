import React from 'react';

const homeStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

function Home(props) {
    return (
        <div style={homeStyle}>
          <h1>Home</h1>
        </div>
    );
}

export default Home;
