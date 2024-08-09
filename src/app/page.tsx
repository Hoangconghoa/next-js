"use client";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "@/slice/UserSlice";
import { AppDispatch, RootState } from "@/reduxToolkit/store";
import UserTable from "./component/users/Users.table";

export default function Home() {
  const userRef = useRef(false);

  const { listUsers } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUser());
    }
    return () => {
      userRef.current = true;
    };
  }, [dispatch]);
  console.log(listUsers);
  return (
    <div>
      <UserTable data={listUsers} />
    </div>
  );
}
