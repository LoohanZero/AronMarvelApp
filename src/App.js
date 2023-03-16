
import React, { useState, useEffect } from 'react';
import Practice from './components/Practice';
import Counter from './components/Counter';
import ControlledForm from './components/ControlledForm';
import Characters from './pages/Characters';
import Comics from './pages/Comics';


function App() {
  
  return (
    <div className="App">
      <Comics/>
      {/* <Characters/> */}
      {/* <ControlledForm/>  */}
      {/* <UncontrolledForm/> */}
      {/* <Practice/>
      <Counter/> */}
    </div>
  );
}

export default App;
