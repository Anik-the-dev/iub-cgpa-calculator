import React from 'react';

const Output = ({ cgpa, credit, hide }) => {
    console.log("anik")
    return (
        <div className='output'>
            <div>
                <div className= {`card ${hide && "d-none"}`}>
                    <h1>Your CGPA is: <span className='cg-style'>{cgpa}</span> </h1>
                    <h2>Credit Earned: {credit}.0 </h2>
                </div>

            </div>

        </div>

    );
};

export default Output;