"use server";
import { revalidateTag } from "next/cache";
export const handleCreate = async (data: any) => {
  console.log("data", data);
  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("list-users");
  return await res.json();
};
export const handleUpdate = async (id: any, data: any) => {
  const res = await fetch(`http://localhost:8000/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("list-users");
  return await res.json();
};
export const handleDelete = async (id: any) => {
  console.log("Deleting user with ID:", id);
  const res = await fetch(`http://localhost:8000/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("list-users");
  return await res.json();
};
