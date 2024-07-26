import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleloClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On changes")
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    
    const handleExtraSpaces= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
     }



    const [text, setText] = useState('');
    //text = "new text" // wrong way to change the state
    //setText = ("new text");
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3 my-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={handleOnChange} value={text}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="3"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleloClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extrass Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1> you text summary</h1>
                <p>{text.split(" ").filter((element) => {return element.length!== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
