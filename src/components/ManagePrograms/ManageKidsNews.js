import React from "react";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";

const ManageKidsNews = () => {
  const history = useHistory();
  const handleKidsNewsUpdate = () => {
    history.push(`/updateKidsNews`);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <h1>Manage Kids News</h1>
          <table>
            <thead>
              <tr>
                <th>Banner Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image Will be here</td>
                <td>Manage Kids News</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                  <button onClick={handleKidsNewsUpdate} type="submit">
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

export default ManageKidsNews;
