import React from "react";
import UserTable from "../component/users/Users.table";

const UserPage = async (props: any) => {
  const { searchParams } = props;
  const res = await fetch(`http://localhost:8000/users?_limit=10`, {
    method: "GET",
    next: { tags: ["list-users"] },
  });

  const data = await res.json();
  console.log("data", data);
  return (
    <>
      <UserTable data={data} />
    </>
  );
};

export default UserPage;
