"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    setUsers(data);
  };

  useEffect(() => {
    getUsers()
  }, []);
  return (
    <>
      <button
        onClick={getUsers}
        className="bg-green-700 text-white px-3 py-4 font-bold rounded"
      >
        Click Here
      </button>
      <div className="font-semibold mt-5">To get the data below click on button</div>
      <div className="font-semibold mt-5">THE DATA IS BELOW HERE</div>
      <div className="p-20 mt-8 my-16 bg-slate-400">
        <h1 className="text-slate-800 font-bold">THE DATA LIST IS:</h1>
        <br></br>
        <ul>
          {users.map((e) => {
            return (
              <li>
                {e.id} {e.username} --- <a href={`/${e.id}`}>Explore</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default page;
