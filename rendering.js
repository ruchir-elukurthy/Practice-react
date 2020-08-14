import React from 'react';
import ReactDOM from 'react-dom'


const friends = {
    title: "Hello",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
};

// New component class starts here:
class Friend extends React.Component{
  render(){
    const friend=friends;
    return (<div>
    <h1>{friend.title}</h1>
    <img 
      src={friend.src}
    />
    </div>);
  }
}

ReactDOM.render(<Friend />, document.getElementById('app'));
