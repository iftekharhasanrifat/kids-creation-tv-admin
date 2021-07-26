import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
const UpdateUpcomingPrograms = () => {
  let upcomingProgramId = useParams();
  const [upcomingProgram, setUpcomingProgram] = useState({});
  useEffect(() => {
    const fetchProgram = async () => {
      const res = await axios.get(`http://localhost:5000/api/upcomingPrograms/${upcomingProgramId.id}`);
      setUpcomingProgram(res.data);
    }
    fetchProgram();
  }, [upcomingProgramId.id])
  return (
    <div className="write">
      <h2 className="text-center mb-5">Update Upcoming Program Banner</h2>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="upcomingFileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="upcomingFileInput"
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={upcomingProgram.title}
          />
        </div>
        <button className="writeSubmit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUpcomingPrograms;
