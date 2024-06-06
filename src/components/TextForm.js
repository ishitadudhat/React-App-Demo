import React,{useState} from 'react'

export default function TextForm(props) {
    var [text, setText]= useState("Input Your Text");
    // setText=("Enter Your Text");
    
    return (
        <div >
            <div class="mx-5 my-5">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
                <button className='btn btn-success my-4'>Convert to Upper Case</button>
            </div>
        </div>
    )
}
