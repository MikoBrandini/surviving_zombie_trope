import React from 'react';

 const GameInterface = (props)=>{
const {next, buttonTitle} = props.details;
return (
    <div>

    <a className="btn btn-primary btn-sm" onClick={() => { props.changepath(next) }} >
      {buttonTitle}
    </a>

    </div>
  )
}

export default GameInterface;
