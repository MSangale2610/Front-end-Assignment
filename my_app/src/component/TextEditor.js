import React,{useState} from 'react'

export default function TextEditor(props) {
  const[text,setText]=useState('hello world');
    const changeUpper = () =>
    {
      let newText = text.toUpperCase();
      setText(newText);
    }
    const changeLower = () =>
    {
      let newText = text.toLowerCase();
      setText(newText);
    }
    const changing =(event) =>
    {
      setText(event.target.value)
    }

    return (
    <>
      <div className="container mt-5">
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" class="form-label"><b>Email address</b></label>
  <input type="email" class="form-control"  id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

  <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Example textarea-ID</b></label>
  <textarea className="form-control" style={{backgroundcolor: 'aqua',color:'red'}} value={text} onChange={changing} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="container mt-3">
  <button className="btn btn-success m-3" onClick={changeUpper}>UpperCase</button>
  <button className="btn btn-success" onClick={changeLower}>LowerCase</button>

</div>
<div className="container mt-3 p-2">
<p>The number of word is <i><b>{text.split('').length}</b></i>and characters are<i><b>{text.length}</b></i></p>
<p>An average person will take<i><b>{0.5/60}"text.split(' ').length"</b></i></p>
</div>
<div className="container mt-3 p-1">
<h1><i>Preview</i></h1>
<p className="mt-3">{text}</p>
</div>
</>
  )
}
