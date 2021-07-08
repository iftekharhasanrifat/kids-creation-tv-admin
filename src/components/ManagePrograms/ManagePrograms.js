import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ManageAllPrograms from "./ManageAllPrograms";

const ManagePrograms = () => {
  const [programs, setPrograms] = useState([]);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <h1>ManagePrograms</h1>
          {/* {programs.map((program) => (
            <ManageAllPrograms program={program}></ManageAllPrograms>
          ))} */}
          <ManageAllPrograms></ManageAllPrograms>
        </div>
      </div>
    </div>
  );
};

export default ManagePrograms;
