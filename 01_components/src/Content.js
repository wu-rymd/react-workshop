import React, {Component} from 'react';

const contentStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Ultrices dui sapien eget mi proin. Porttitor eget dolor morbi non arcu risus quis. Blandit cursus risus at ultrices mi tempus imperdiet. Massa sed elementum tempus egestas sed. A erat nam at lectus urna. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Vitae tortor condimentum lacinia quis vel eros donec. Risus nullam eget felis eget nunc lobortis mattis. Sed sed risus pretium quam vulputate."

class Content extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div style={contentStyle}>
              <h1>My content</h1>
              <h3>This is another React component that contains some sample content.</h3>
              <p>{lorem}</p>
            </div>
        );
    }
}

export default Content;
