import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <>
            <div>
      
              <Navbar/>
      
                <News pageSize={5} country="in" category="general" />
      
              <footer/>

            </div>
      </>
      
    );
  }
}

