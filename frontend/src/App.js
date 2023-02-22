import './App.css';
import Header from './components/Header';
import React from 'react';
import Auth from './components/Auth';
import { Route,Routes } from 'react-router-dom';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </main>
  </React.Fragment>
   
};

export default App;
