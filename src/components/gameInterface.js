import React from 'react';

 const GameInterface = (props)=>{
const {next, buttonTitle} = props.details;
return (
    <div className="gameInterface">

    <div className="btn btn-primary" onClick={() => { props.changepath(next) }} >
      {buttonTitle}
    </div>

    </div>
  )
}

export default GameInterface;
