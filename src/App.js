import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <hr />
      <Course></Course>
      <Footer></Footer>

    </div>
  );
}

export default App;
