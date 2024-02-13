import { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("");


    const handelonChange = (event) => {
        setText(event.target.value);

    }

    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase" , "success")

    }
    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase" , "success")

    }

    const handelClClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared All the text" , "success")

    }

    const handelRsClick = () => {
        let newText = text.split (/ [ ] + /);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces" , "success")
    };


    const handelCoClick = async () => {
        try {
            await navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard" , "success")
            document.getSelection().removeAllRanges();
        } catch (err) {
            console.error('Unable to copy text to clipboard', err);
        }
    };

    let textBoxStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: 'white',
    }

    let buttonStyle = {
        color: props.LightMode ? 'black' : 'white',
        backgroundColor: props.LightMode ? '' : 'black',
        border: 'none',
    }



    return (
        <div>

            <div className="container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={textBoxStyle} value={text} onChange={handelonChange} rows="12"></textarea>
                <button disabled = {text.length === 0} className="btn btn-primary my-3" style={buttonStyle} onClick={handelUpClick} >Upper Case Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary my-3 mx-3" style={buttonStyle} onClick={handelLoClick} >Lower Case Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary" style={buttonStyle} onClick={handelClClick}>Clear Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3" style={buttonStyle} onClick={handelCoClick}>Copy To Clipboard</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3" style={buttonStyle} onClick={handelRsClick}>Remove Extra Spaces</button>
            </div>

            <div className="container">
                <h2>Text Summary</h2>
                <p> {text.trim() === '' ? 0 : text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
            </div>
        </div>
    )
}


export default TextForm;