import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./ManageAllPrograms.css";
const ManageAllPrograms = ({ programs }) => {
  const history = useHistory();
  const handleDelete = (e) => {
    e.target.parentNode.parentNode.style.display = "none";
  };
  // console.log(programs);
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
          {
            programs.map(program => (
              <tr>
                <td>{program.category}</td>
                <td>{program.link}</td>
                <td>
                  <Link className="manageButton" to={`/updatePrograms/${program._id}`}>
                    Update
                  </Link>{" "}
                  | <Link onClick={(e)=>handleDelete(e)}className="manageButton">Delete</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllPrograms;
