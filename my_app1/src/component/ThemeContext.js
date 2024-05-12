//theme context.js
import{ createContext,useState} from 'react'
//create a context with adefault value(light theme)
const ThemeContext=createContext({
    theme:'light',
    toggleTheme:()=>{},
});
// create a provider component that wii wrapp your entire app
export const ThemeProvider=({children}) =>{
  const [ theme,setTheme]=useState('light');
  //toggle between light and dark theme
  const toggleTheme=()=>{
   setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'));
  };
  return (
   <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
   </ThemeContext.Provider>
  );
};
export default ThemeContext;
