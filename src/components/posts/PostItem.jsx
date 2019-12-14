import React, { useContext } from "react";
import PostContext from "../../context/post/postContext";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

const PostItem = ({ post }) => {
  const postContext = useContext(PostContext);
  const { setCurrent, deletePost, clearCurrent } = postContext;

  const onClick = () => {
    setCurrent(post);
  };

  const onDelete = () => {
    deletePost(post.id);
    M.toast({ html: "Post Deleted", classes: "red" });
    clearCurrent();
  };

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={onClick}
          href="#edit-post-modal"
          className="modal-trigger black-text"
        >
          <h5>{post.title} </h5>
          <p>{post.article}</p>
        </a>
        <span className="grey-text">
          <span>Author: {post.author}</span>
        </span>
        <a onClick={onDelete} href="#!" className="secondary-content ">
          <i className="material-icons blue-text">delete</i>
        </a>
      </div>
    </li>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
