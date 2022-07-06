import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./AllUser.css";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AllUser = () => {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json()))

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl">Total User {users.length}</h2>
      </div>
    </>
  );
};

export default AllUser;
