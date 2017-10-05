import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import GameInterface from './components/gameInterface';

// paths.js is the data which populates the content + buttons below.
import paths from './paths';


class App extends Component {
  constructor(){
    super();
    this.state={
      current_path: 0,
      paths
    };
    this.changePath = this.changePath.bind(this);
  }

    changePath(next){
    this.setState({
      current_path: next
    });
  }

 quitGame(){
    this.setState({
      current_path: 0
    });
  }

  render() {

    function  showButtons(paths){
    if(paths){
      return paths.map(i => {
        return <GameInterface paths={currentPath} key={i.buttonTitle} details={i} changepath={changePath}/>
      });
    }
  }
    const data = this.state.paths[this.state.current_path];
    const currentPath = this.state.current_path
    const changePath = this.changePath
    const quitGame = this.quitGame.bind(this)

    return (
      <div className="container-fluid mainContainer" style={{backgroundImage: `url(${data.img})`}}>
        <Header reset={quitGame}/>
        <Content
          text={data.text}
          paths={data.paths}
          gameOver={data.gameOver}
          reset={quitGame}
          showButtons={showButtons}
        />

        <Footer/>
      </div>
    );
  }
}

export default App;
