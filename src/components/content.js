import React from 'react';

const Content = (props) =>{
  return(
    <div className="container-fluid content">
      <p>{props.text}</p>
      {props.showButtons(props.paths)}
    </div>
    )
}

export default Content;
