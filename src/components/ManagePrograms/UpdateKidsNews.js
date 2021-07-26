import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
const UpdateKidsNews = () => {
  let newsId = useParams();
  const [singleKidNews, setSingleKidNews] = useState({});
  useEffect(() => {
    const fetchProgram = async () => {
      const res = await axios.get(`http://localhost:5000/api/kidsNews/${newsId.id}`);
      setSingleKidNews(res.data);
    }
    fetchProgram();
  }, [newsId.id])
  return (
    <div className="write">
      <h2 className="text-center mb-5">Update Kids News</h2>
      <div className="imgContainer">
        <img
          className="writeImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt=""
        />
      </div>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            value={singleKidNews.title}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Description..."
            type="text"
            className="writeInput writeText"
            value={singleKidNews.desc}
          ></textarea>
        </div>
        <button className="writeSubmit">Update</button>
      </form>
    </div>
  );
};

export default UpdateKidsNews;
