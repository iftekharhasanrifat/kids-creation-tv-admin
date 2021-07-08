import React from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";

const ManageUpcomingPrograms = () => {
  const history = useHistory();
  const handleUpcomingUpdate = () => {
    history.push(`/updateUpcomingPrograms`);
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
              <tr>
                <td>Manage Upcoming Programs</td>
                <td>image will be here</td>
                <td>
                  <button onClick={handleUpcomingUpdate} type="submit">
                    Update
                  </button>{" "}
                  | <button type="submit">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUpcomingPrograms;
