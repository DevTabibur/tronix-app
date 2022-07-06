import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:5000/blogs`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setBlogs(data);
      });
  }, []);

  return [blogs, setBlogs];
};

export default useBlogs;
