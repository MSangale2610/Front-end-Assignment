import React, { startTransition,useState } from 'react'


export default function ConditionRendering() {
    const [showContent,setshowcontent]=useState(false);
    const handleButtonclick=()=>{
    startTransition(()=>{
        setshowcontent(!showContent);

    });
    };
  return (
    <div>
      <h1>Conditional Rendering example</h1>
      <button onClick={ handleButtonclick}>
        {showContent ?
      'Hide Content' :'Show Content'}
       </button>
{showContent &&(
    <div>
        <p>this is the content to be conditionally rendered.</p>
   </div>
    )}
    </div>
  );
}
