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
    
    return (
        <div >
            <div class="mx-5 my-5">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-success my-4' onClick={handleUpChange}>Convert to Upper Case</button>
            </div>
        </div>
    )
}
