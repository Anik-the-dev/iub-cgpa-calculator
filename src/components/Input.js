import React, { useState } from 'react';
import InputBox from './InputBox';

const Input = () => {
    const primaryData = [{ courseNmae : '', cgpa: 1, credit:1 }]
    const [inputText, setInputText] = useState(primaryData)
    const handleAddInputBoxClick = () => {
        let newInputText = [...inputText,{ courseNmae : '', cgpa: 1, credit:1 }]
        setInputText(newInputText)


    }
    console.log(inputText)
    return (
        <div>
            <header className='header'>
                <h1 className='text-center'>Anik's CGPA Calculator</h1>
            </header>
            
            {/* inputbox calling */}
            {
                inputText.map(() =><InputBox></InputBox>)
            }
            
            {/* Add more btn */}
            <button onClick={handleAddInputBoxClick}>Add One More</button>




        </div>
    );
};

export default Input;