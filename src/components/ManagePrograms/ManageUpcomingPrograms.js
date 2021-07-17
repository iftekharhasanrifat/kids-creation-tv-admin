import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios"
const ManageUpcomingPrograms = () => {
  const [upcomingPrograms, setUpcomingPrograms] = useState([]);

  useEffect(() => {
    const fetchUpcomingPrograms = async () => {
      const res = await axios.get("http://localhost:5000/api/upcomingPrograms");
      setUpcomingPrograms(res.data);
    }
    fetchUpcomingPrograms();
  }, [])

  const history = useHistory();
  const handleDelete = (e) => {
    e.target.parentNode.parentNode.style.display = "none";
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <h1>Manage Upcoming Programs</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                upcomingPrograms.map(upcomingProgram => (
                  <tr>
                    <td>{upcomingProgram.title}</td>
                    <td>image will be here</td>
                    <td>
                    <Link className="manageButton" to={`/updateUpcomingPrograms/${upcomingProgram._id}`}>
                        Update
                      </Link>{" "}
                      | <Link onClick={(e) => handleDelete(e)} className="manageButton">Delete</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUpcomingPrograms;
