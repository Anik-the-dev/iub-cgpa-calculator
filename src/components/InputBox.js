import React from 'react';

const InputBox = () => {
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
                        <select>
                            <option value='A'>A</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B'>B</option>
                            <option value='B-'>B-</option>
                            <option value='C+'>C+</option>
                            <option value='C'>C</option>
                            <option value='C-'>C-</option>
                            <option value='D+'>D+</option>
                            <option value='D'>D</option>
                            <option value='F'>F</option>
                        </select>
                    </div>

                    <div className='earnedCredit'>
                        <label>Earned Credit: </label>
                        <select>
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