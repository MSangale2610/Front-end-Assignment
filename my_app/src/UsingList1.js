import React,{useState} from 'react'

export default function UsingList1() {
    const[items,setItems]=useState(["item 1","item 2"]);
    const addItem=()=>{
        setItems([...items,`Item ${items.length + 1}`]);
    };
  return (
    <div>
      <button className= "btn btn-primary" onClick={addItem}>Add Items</button>
      <ul>
        {items.map((item,index)=>(
            <li key={index}>{items}</li>
        ))}
      </ul>
    </div>
  );
};
