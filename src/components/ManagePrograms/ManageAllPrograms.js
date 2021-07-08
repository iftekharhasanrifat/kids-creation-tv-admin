import React from "react";
import { useHistory } from "react-router-dom";
import "./ManageAllPrograms.css";
const ManageAllPrograms = () => {
  const history = useHistory();
  const handleUpdate = () => {
    history.push(`/updatePrograms`);
  };
  return (
    <div className="manage-all-program">
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add Programs</td>
            <td>Links will be here</td>
            <td>
              <button onClick={handleUpdate} type="submit">
                Update
              </button>{" "}
              | <button type="submit">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Add Upcioming Programs</td>
            <td>Links will be here</td>
            <td>
              <button onClick={handleUpdate} type="submit">
                Update
              </button>{" "}
              | <button type="submit">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Add Kids News</td>
            <td>Links will be here</td>
            <td>
              <button onClick={handleUpdate} type="submit">
                Update
              </button>{" "}
              | <button type="submit">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllPrograms;
