import React, {useState} from 'react'

export default function TextForm(props) {
  //THIS IS UPDATION FUNCTION , WHENEVER WE WANT TO CHANGE 'STATE' WE USE "setText()".AND PLACE'TEXT'.
  const [text, setText] = useState('Enter text here...');

  const handleOnChange = (event) =>{
      setText(event.target.value)
  }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
  }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    
    }
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
    }
    return (
      <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#0f1124'}}>
       <h4>{props.heading}</h4>
       <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#322e2e':'white',color:props.mode==='dark'?'white':'#0f1124'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>To Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>To Lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3 mx-2" style={{color: props.mode==='dark'?'white':'#0f1124'}}>
      <h5>
        Total words count :</h5>
        <p><b>Words :  {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}   Characters : {text.length} </b></p>
        <p><b>Minutes read : {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} </b></p>
    </div>
    </>
  )
}
      
