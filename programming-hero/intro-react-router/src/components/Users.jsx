import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <>
      <h1 className="text-3xl font-bold p-20">Total Users: {users.length}</h1>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </>
  );
};

export default Users;
