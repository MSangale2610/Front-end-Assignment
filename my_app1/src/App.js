import React from 'react'
import logo from './logo.svg';
import './App.css';
import GeolocationComponent from './component/GeolocationComponent';
import { ThemeProvider } from '../ThemeContext';
import ThemeComponent from '../ThemeComponent';
//import map from './component/map';

function App() {
  return (
    <>
    
    <div className='container m-5'>
    <Navbar/>
   </div>
  
   <ThemeProvider>
    <div className='m-3'>
      <h1>
        Theme switcher app
      </h1>
      <ThemeComponent/>
    </div>
   </ThemeProvider>
    <div className='container m-5'>
      <TextEditor/></div>
   
    <GeolocationComponent/>
    </>  
  );
}

export default App;
