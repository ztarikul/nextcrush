import React from "react";
import getPost from "../../../lib/getPost";
import getPostComments from "../../../lib/getPostComment";

export async function generateMetadata(props) {
  const { id } = props.params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage(props) {
  const { id } = props.params;

  // const post = await getPost(id);
  // const comments = await getPostComments(id);

  // Await: always wait for previous function or line of code execute, But we need to execute parallelly

  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr />
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
    </div>
  );
}
