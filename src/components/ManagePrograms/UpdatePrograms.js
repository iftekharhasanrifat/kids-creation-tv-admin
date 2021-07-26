import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
const UpdatePrograms = () => {
  let programId = useParams();
  const [program, setProgram] = useState({});
  useEffect(() => {
    const fetchProgram = async () => {
      const res = await axios.get(`http://localhost:5000/api/programs/${programId.id}`);
      setProgram(res.data);
    }
    fetchProgram();
  }, [programId.id])
  return (
    <div className='write'>
      <h2 className='text-center mb-5'>Update Programs</h2>
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
          <textarea value={program.link} type="text" className="writeInput writeText"></textarea>
        </div>
        <button className='programSubmit'>Update</button>
      </form>
    </div>
  );
};

export default UpdatePrograms;
