import React from 'react';

export default function Usli() {
    const items=["Items 1","Item 2","Item 3"];
    
    const handleClick=(item)=>{
        alert(`Clicked on $(item)`);
    };
  return (
    <ul>
      {items.map((item,index)=>(
        <button className="btn btn-primary m-2" onClick={()=>handleClick(item)}>
            <li key={index}>{item}</li>
        </button>
      ))}
    </ul>
  );
};
