import React,{useState} from 'react'

export default function ConRendering() {
    const [userInput, setUserInput]=useState('');
    const handleInputChange=(event)=>{
        setUserInput(event.target.value);
    };
  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange}/>
      {
        userInput === 'Manisha'?(
            <p>This is your name</p>
        ) :(
            <p>This is not your name</p>
        )}
    </div>
  );
}
