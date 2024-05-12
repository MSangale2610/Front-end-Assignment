import React from 'react'

export default function Usinglists() {
    const items=["address","Pin Code","State"]
    /*const items1=[
        { id:1, text:"state" },
        { id:2, text:"country"},
        { id:3, text:"city"},
    ];*/
  return (
    <>
    <ul>
      {items.map((item, index)=>(
        <li key={index}>{item}</li>
        
      ))}
    </ul>
    </>
  );
};
