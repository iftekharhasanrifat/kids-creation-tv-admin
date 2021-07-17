import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
const ManageKidsNews = () => {
  const history = useHistory();
  const handleDelete = (e) => {
    e.target.parentNode.parentNode.style.display = "none";
  };
  const [kidsNews, setKidsNews] = useState([]);
  useEffect(() => {
    const fetchKidsNews = async () => {
      const res = await axios.get("http://localhost:5000/api/kidsNews");
      setKidsNews(res.data);
    }
    fetchKidsNews();
  }, [])
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
              {
                kidsNews.map(singleNews => (
                  <tr>
                    <td>Image Will be here</td>
                    <td>{singleNews.title}</td>
                    <td>{singleNews.desc}</td>
                    <td>
                      <Link className="manageButton" to={`/updateKidsNews/${singleNews._id}`}>
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

export default ManageKidsNews;
