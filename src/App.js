import React from 'react';
import Nav from "./components/nav/Nav";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
 
  return (
    <Router>
    <Routes>
     <Route  path='/' element={<Nav />}/>
     </Routes>
     </Router>
  );
}

export default App;
