import React from 'react';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Menu1 from './components/Menu1';

import './App.css';

import './components/menu.css'

function App(props) {
  
    return (
      <div className="App">
      
     <Menu1/>
      <First/>
      <Second/>
      <Third/>
      
      </div>

   );
 }

export default App;

