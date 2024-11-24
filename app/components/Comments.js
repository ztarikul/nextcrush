import React from "react";

export default async function Comments(props) {
  const comments = await props.promise;

  return (
    <div className="mt-6">
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li className="mb-2" key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
