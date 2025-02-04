import React from "react";
import UserTable from "../component/users/Users.table";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Users",
};
const UserPage = async () => {
  const res = await fetch(`http://localhost:8000/users?_limit=10`, {
    method: "GET",
    next: { tags: ["list-users"] },
  });
  const data = await res.json();
  return (
    <>
      <UserTable data={data} />{" "}
    </>
  );
};

export default UserPage;
