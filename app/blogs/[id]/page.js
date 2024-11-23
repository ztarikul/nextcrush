import { notFound } from "next/navigation";
import React from "react";

export default function BlogPage(props) {
  const { id } = props.params;

  if (id === "3") {
    notFound();
  }
  return <div className="mt-10">The Blog Id is : {id}</div>;
}
