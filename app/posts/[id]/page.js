import React, { Suspense } from "react";
import getPost from "../../../lib/getPost";
import getPostComments from "../../../lib/getPostComment";
import Comments from "@/app/components/Comments";

export async function generateMetadata(props) {
  const { id } = await props.params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage(props) {
  const { id } = await props.params;

  // const post = await getPost(id);
  // const comments = await getPostComments(id);

  // Await: always wait for previous function or line of code execute, But we need to execute parallelly

  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  // For suspense

  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr />
      <Suspense fallback="Loading Comments ... ">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
