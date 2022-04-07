import React, { useState } from 'react';
import InputBox from './InputBox';


const Input = () => {
    const primaryData = [{ courseNmae: '', cgpa: 1, credit: 1 }]
    const [inputText, setInputText] = useState(primaryData)
    const handleAddInputBoxClick = () => {
        let newInputText = [...inputText, { courseNmae: '', cgpa: 1, credit: 1 }]
        setInputText(newInputText)

    }

    const handleOnChangeCgpa = (e, index) =>{
        e.preventDefault()
        let selected = e.target.name
        let newData = [...inputText]
        newData[index][selected] = e.target.value
        setInputText(newData)

    }

    const handleOnChangeCredit = (e, index) =>{
        e.preventDefault()
        let selected = e.target.name
        let newDataCredit = [...inputText]
        newDataCredit[index][selected] = e.target.value
        setInputText(newDataCredit)

    }

    console.log(inputText)


    return (
        <div>
            <header className='header'>
                <h1 className='text-center'>Anik's CGPA Calculator</h1>
            </header>

            {/* inputbox calling */}
            {
                inputText.map((value,index) => <InputBox 
                value = {value} index = {index} handleChangeforCgpa = {handleOnChangeCgpa}  handleOnChangeCredit= {handleOnChangeCredit}></InputBox>)
            }

            {/* Add more btn */}
            <div className='container'>
                <button className='btn' onClick={handleAddInputBoxClick}><p>Add One More Course</p></button>
                <button className='btn btn-outline'><p>Calculate Your CGPA</p></button>
            </div>





        </div>
    );
};

export default Input;