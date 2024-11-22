import React from "react";

export default function BlogPage(props) {
  const { id } = props.params;
  return <div className="mt-10">The Blog Id is : {id}</div>;
}
