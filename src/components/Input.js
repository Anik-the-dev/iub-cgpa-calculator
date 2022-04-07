import React, { useState } from 'react';
import InputBox from './InputBox';


const Input = () => {
    const primaryData = [{ courseNmae: '', cgpa: 1, credit: 1 }]
    const [totalCredit, setTotalCredit] = useState(0)
    const [totalCgpa, setTotalCgpa] = useState(0)
    const [inputText, setInputText] = useState(primaryData)
    const handleAddInputBoxClick = () => {
        let newInputText = [...inputText, { courseNmae: '', cgpa: 1, credit: 1 }]
        setInputText(newInputText)

    }

    const handleOnChangeCgpa = (e, index) =>{
        e.preventDefault()
        let selected = e.target.name
        let newData = [...inputText]
        newData[index][selected] = parseFloat(e.target.value)
        setInputText(newData)

    }

    const handleOnChangeCredit = (e, index) =>{
        e.preventDefault()
        let selected = e.target.name
        let newDataCredit = [...inputText]
        newDataCredit[index][selected] = parseFloat(e.target.value)
        setInputText(newDataCredit)

    }

    // handle calculate btn..........
    function handleCalculateBtn(totalCgpa,totalCredit){
        for(const i of inputText){
            totalCgpa+=i.cgpa * i.credit
            totalCredit+=i.credit
            
        }
        setTotalCredit(totalCredit)
        let cgpa = totalCgpa/totalCredit
        setTotalCgpa( cgpa.toFixed(2))

    

    }


   


    return (
        <div>
            <header className='header'>
                <h1 className='text-center'>Anik's CGPA Calculator {totalCgpa}</h1>
            </header>

            {/* inputbox calling */}
            {
                inputText.map((value,index) => <InputBox 
                value = {value} index = {index} handleChangeforCgpa = {handleOnChangeCgpa}  handleOnChangeCredit= {handleOnChangeCredit}></InputBox>)
            }

            {/* Add more btn */}
            <div className='container'>
                <button className='btn' onClick={handleAddInputBoxClick}><p>Add One More Course</p></button>
            {/* Calculate Btn */}
                <button className='btn btn-outline' onClick={()=>handleCalculateBtn(totalCgpa,totalCredit)}><p>Calculate Your CGPA</p></button>
            </div>





        </div>
    );
};

export default Input;