import React, { useEffect, useContext } from "react";
import PostItem from "./PostItem";
import Preloader from "../layouts/Preloader";
import PostContext from "../../context/post/postContext";

const Post = () => {
  const postContext = useContext(PostContext);
  const { posts, getPost, getAuthors, loading } = postContext;

  useEffect(() => {
    getPost();
    getAuthors();
    //eslint-disable-next-line
  }, []);

  if (posts !== null && posts.length === 0) return <h4> No Post</h4>;

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Post</h4>
      </li>

      {loading && posts === null ? (
        <Preloader />
      ) : (
        posts.map(post => <PostItem post={post} key={post.id} />)
      )}
    </ul>
  );
};

export default Post;
