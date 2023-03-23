
import React, { useState, useEffect } from 'react';
import Practice from './components/Practice';
import Counter from './components/Counter';
import ControlledForm from './components/ControlledForm';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Comic from './pages/Comic';
import { Routes, Route } from 'react-router-dom';

// BrowserRouter creates a variable out of the url and pass it to Routes and Routes compares the variable with the path inside
// the Route and if it matches, it shows the element (which is the page)
function App() {
  
  return (
    <div className="App">
      {/* <Comics/> */}
      {/* <Characters/> */}
      {/* <ControlledForm/>  */}
      {/* <UncontrolledForm/> */}
      {/* <Practice/>
      <Counter/> */}
    <Routes>
      <Route path="/" element={<ControlledForm/>} />
      <Route path="/comics" element={<Comics/>} />
      <Route path="/comic/:id" element={<Comic/>} />
      <Route path="/characters" element={<Characters/>} />
      <Route path="/practice" element={<Practice/>} />
      <Route path="/counter" element={<Counter/>} />
    </Routes>

    </div>
  );
}

export default App;
