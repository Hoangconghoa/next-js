import React from "react";

const page = (props: any) => {
  const { params } = props;
  return <div>id = {params?.id}</div>;
};

export default page;
