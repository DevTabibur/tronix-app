import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./AllUser.css";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "./UserRow";

const AllUser = () => {
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
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl">Total User {users.length}</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user._id} user={user} refetch={refetch}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUser;
