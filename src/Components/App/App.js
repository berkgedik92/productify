import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import ProductifyContext from '../../ProductifyContext';
import STORE from '../../STORE';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  onDrop = (e, status) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("id"));

    let tasks = this.state.tasks.filter((task => {
        if (task.id === taskId){
            task.status = status;
        }
        return task;
    }));

    this.setState({
        ...this.state,
        tasks
    })
  }
  
  componentDidMount(){
    const {teamName, isLoggedIn, loggedInUser, projects, members, tasks} = STORE;
    this.setState({
      teamName, 
      isLoggedIn, 
      loggedInUser, 
      members, 
      projects,
      tasks
    })
  }

  render() {
    const contextValue = {
      teamName: this.state.teamName, 
      isLoggedIn: this.state.isLoggedIn, 
      loggedInUser: this.state.loggedInUser, 
      members: this.state.members, 
      projects: this.state.projects,
      tasks: this.state.tasks,
      onDrop: this.onDrop
    }
    return (
      <ProductifyContext.Provider value={contextValue}>
        <div className="app">
          <Header isLoggedIn={this.state.isLoggedIn} user={this.state.loggedInUser}/>
          <MainContent/>
        </div>
      </ProductifyContext.Provider>
    );
  }
  
}
