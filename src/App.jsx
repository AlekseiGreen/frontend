import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  

  return (
    <div className='flex-wrapper'>
      <Header ></Header>
      <Content ></Content>
      <Footer ></Footer>
    </div>
  )
}

export default App