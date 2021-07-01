import React from 'react';

const UpciomingPrograms = () => {
    return (
        <div className="write">
            <h2 className='text-center mb-5'>Publish Upcoming Program Banner</h2>
             <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="upcomingFileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="upcomingFileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
};

export default UpciomingPrograms;