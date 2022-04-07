import React, { useState } from 'react';
import InputBox from './InputBox';
import Output from './Output';


const Input = () => {
    const primaryData = [{ courseNmae: '', cgpa: 0, credit: 0 }]
    const [hide, sethide] = useState(true)
    const [totalCredit, setTotalCredit] = useState(0)
    const [totalCgpa, setTotalCgpa] = useState(0)
    const [inputText, setInputText] = useState(primaryData)
    const handleAddInputBoxClick = () => {
        let newInputText = [...inputText, { courseNmae: '', cgpa: 0, credit: 0 }]
        setInputText(newInputText)

    }

    const handleOnChangeCgpa = (e, index) => {
        e.preventDefault()
        let selected = e.target.name
        let newData = [...inputText]
        newData[index][selected] = parseFloat(e.target.value)
        setInputText(newData)

    }

    const handleOnChangeCredit = (e, index) => {
        e.preventDefault()
        let selected = e.target.name
        let newDataCredit = [...inputText]
        newDataCredit[index][selected] = parseFloat(e.target.value)
        setInputText(newDataCredit)

    }

    // handle calculate btn..........
    function handleCalculateBtn() {
        let mytotalCgpa = 0
        let mytotalCredit = 0
        for (const i of inputText) {

            mytotalCgpa += i.cgpa * i.credit
            mytotalCredit += i.credit

        }
        setTotalCredit(mytotalCredit)
        let cgpa = mytotalCgpa / mytotalCredit
        setTotalCgpa(cgpa.toFixed(2))
        sethide(false)


    }






    return (
        <div>
            <header className='header'>
                <h1 className='text-center'>Sharbany's CGPA Calculator</h1>
            </header>
            <div className='container'>
                <Output cgpa={totalCgpa} credit={totalCredit} hide={hide}></Output>

            </div>



            {/* inputbox calling */}
            {
                inputText.map((value, index) => <InputBox
                    value={value} index={index} handleChangeforCgpa={handleOnChangeCgpa} handleOnChangeCredit={handleOnChangeCredit}></InputBox>)
            }

            {/* Add more btn */}
            <div className='container'>
                <button className='btn' onClick={handleAddInputBoxClick}><p>Add One More Course</p></button>
                {/* Calculate Btn */}
                <button className='btn btn-outline' onClick={() => handleCalculateBtn()}><p>Calculate Your CGPA</p></button>
                {/* <Output cgpa={totalCgpa} credit={totalCredit} hide={hide}></Output> */}
            </div>





        </div>
    );
};

export default Input;