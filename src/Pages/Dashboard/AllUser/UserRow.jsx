import React from "react";

const UserRow = ({ user }) => {
  const {email} = user;
  return (
    <>
      <tr>
        <th>1</th>
        <td>{email}</td>
        <td><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Make Admin</button></td>
        <td><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Remove User</button></td>
      </tr>
    </>
  );
};

export default UserRow;
