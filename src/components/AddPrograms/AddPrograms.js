import React from 'react';
import './AddPrograms.css'
const AddPrograms = () => {
    return (
        <div className='write'>
            <h2 className='text-center mb-5'>Publish Programs</h2>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <select className="categoryDropdown" name="category" id="categories">
                        <option value="Know Your Country">Know Your Country</option>
                        <option value="Cartoon Songs">Cartoon Songs</option>
                        <option value="Poems">Poems</option>
                        <option value="Little Genious">Little Genious</option>
                        <option value="Country Songs">Country Songs</option>
                    </select>
                    {/* <input type="text" placeholder="Category" className="writeInput" autoFocus={true} /> */}
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Link" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className='programSubmit'>Publish</button>
            </form>
        </div>
    );
};

export default AddPrograms;