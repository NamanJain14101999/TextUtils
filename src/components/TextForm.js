import React,{useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!","success");
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success");
        
    }
    
    const handleExtraSpaces = ()=>{
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed!","success");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'#042743':'white'}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button> 
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, and {text.length} character</p>
            <p>{text.split(" ").length * 0.008} mintues to read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter your text to preview here"}</p>
        </div>
        </>
    )
}
