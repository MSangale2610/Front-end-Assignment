import React,{useContext} from 'react';
import ThemeContext from './ThemeContext';

const ThemeComponent=()=>{
    const{theme,toggleTheme}=useContext(ThemeContext);
 return (
    <div style={{background:theme==='light'?'#fff':'#333',color:theme==='light'?'#000':'#fff'}}>
      <h2>{theme==='light'?'light Theme':'Dark Theme'}</h2>
      <button className='btn btn-primarey' onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeComponent;
