import React, { useState } from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState('Enter Text here props value');
    const handleUpClick = () => {
        setText("Have clicked and setText");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase Activated", "Success");
    }

    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("first" + text);
        setText(event.target.value);
        
    }
    return (
        <>
            <h2 className='mb-3'>
                {props.heading}
            </h2>
            <div>
                <textarea rows="8" className="w-100" value={text} onChange={handleOnChange}>

                </textarea>
            </div>
            <button className="btn btn-primary ms-0 m-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary m-2" onClick={handleLwClick} >Convert to Lowercase</button>
            <button className="btn btn-primary m-2" onClick={handleClearClick} >Clear</button>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes</p>
            <h3>Preview</h3>
            <p className="my-3" style={divStyle}>{text.length>0?text:'Please Enter something to add'}</p>
        </>
    )
}

const divStyle = {
    fontFamily: 'arial',
};