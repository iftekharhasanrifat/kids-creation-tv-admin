import React from 'react';

const AddPrograms = () => {
    return (
        <div className='write'>
            <h2 className='text-center mb-5'>Publish Programs</h2>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <input type="text" placeholder="Category" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Link" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
};

export default AddPrograms;