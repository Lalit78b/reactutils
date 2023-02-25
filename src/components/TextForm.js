import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick= ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case.", "success");
    }
    const handleOnChange= (event)=> {
        setText(event.target.value);
    }
    const handleLowerClick= ()=> {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to lower case.", "success");
    }
    const clearText= ()=> {
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared.", "success");
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="emyBox" rows="5" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode=== 'dark' ? 'white' : 'black'}} ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes to read.</p>
<h2 className= "my-2">Preview</h2>
<p>{text.length>0?text: "Enter your text in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
