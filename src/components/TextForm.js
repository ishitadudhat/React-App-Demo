import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState("Input Your Text");
    // setText("Enter Your Text"); 

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleUpChange = () => {
        // console.log("Btn click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoChange = () => {
        // console.log("Btn click");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text=text;
        window.speechSynthesis.speak(newText);
    }

    const handleClear = () => {
        setText('');
    }

    const handleCopy = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    return (
        <div >
            <div class="mx-5 my-5 container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-dark my-4 mx-4' onClick={handleUpChange}>Convert to Upper Case</button>
                <button className='btn btn-outline-dark my-4 mx-4' onClick={handleLoChange}>Convert to Lower Case</button>
                <button className='btn btn-dark my-4 mx-4' onClick={handleSpeak}>Speak</button>
                <button className='btn btn-outline-dark my-4 mx-4' onClick={handleClear}>Clear</button>
                <button className='btn btn-dark my-4 mx-4' onClick={handleCopy}>Copy</button>
                <button className='btn btn-outline-dark my-4 mx-4' onClick={handleRemoveSpace}>Remove Extra Space</button>

            </div>

            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} Words </p>
                <p>{text.length} Characters </p>
                <p>{0.008*text.split(" ").length} Reading Time</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </div>
    )
}