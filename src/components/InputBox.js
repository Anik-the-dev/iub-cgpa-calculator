import React from 'react';

const InputBox = ({handleChangeforCgpa,handleOnChangeCredit, index}) => {
    

    return (
        <div className='container'>
            <div className="card input-box">
                <div className='flex'>
                    <div className='courseName'>
                        <label>Course Name: </label>
                        <input type='text' placeholder='Optional'></input>
                    </div>

                    <div className='obtainedGrade'>
                        <label>Obtained Grade: </label>
                        <select name='cgpa' onChange={(e)=>handleChangeforCgpa(e,index)}>
                            <option value='0.0'>Choose Your Grade</option>
                            <option value='4.0'>A</option>
                            <option value='3.7'>A-</option>
                            <option value='3.3'>B+</option>
                            <option value='3.0'>B</option>
                            <option value='2.7'>B-</option>
                            <option value='2.3'>C+</option>
                            <option value='2.0'>C</option>
                            <option value='1.7'>C-</option>
                            <option value='1.3'>D+</option>
                            <option value='1.0'>D</option>
                            <option value='0.0'>F</option>
                        </select>
                    </div>

                    <div className='earnedCredit'>
                        <label>Earned Credit: </label>
                        <select name='credit' onChange={(e)=>handleOnChangeCredit(e,index)}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>

                        </select>

                    </div>
                </div>





            </div>

        </div>
    );
};

export default InputBox;