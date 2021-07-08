import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="side-bar">
      <nav className="flex-column nav-item">
        <Link className="link" to="/manageprogram">
          <i class="fas fa-tasks"></i>
          Manage Programs
        </Link>
        <Link className="link" to="/manageUpcomingProgram">
          <i class="fas fa-file-upload"></i>
          Manage Upcioming Programs
        </Link>
        <Link className="link" to="/manageKidsNews">
          <i class="fas fa-newspaper"></i>
          Manage Kids News
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
