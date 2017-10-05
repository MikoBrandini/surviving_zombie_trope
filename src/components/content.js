import React from 'react';

const Content = (props) =>{
  return(
    <div className="container-fluid content">
      <p>{props.text}</p>
      <div className="gameInterface">{props.showButtons(props.paths)}</div>
      <h1 onClick={props.reset} className="text-danger text-center">{props.gameOver}</h1>
    </div>
    )
}

export default Content;
