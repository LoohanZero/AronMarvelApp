
import React, { useState, useEffect } from 'react';
import Practice from './components/Practice';
import Counter from './components/Counter';
import ControlledForm from './components/ControlledForm';


function App() {
  
  return (
    <div className="App">
      <ControlledForm/> 
      {/* <UncontrolledForm/> */}
      {/* <Practice/>
      <Counter/> */}
    </div>
  );
}

export default App;
