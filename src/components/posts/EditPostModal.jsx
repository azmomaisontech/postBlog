import React, { useEffect, useContext, useState } from "react";
import SelectOption from "../authors/SelectOption";
import PostContext from "../../context/post/postContext";
import M from "materialize-css/dist/js/materialize.min.js";

const EditPostModal = () => {
  const postContext = useContext(PostContext);
  const { current, updatePost, clearCurrent } = postContext;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setAuthor(current.author);
      setArticle(current.article);
    }
  }, [current]);

  const onSubmit = () => {
    const updPost = {
      id: current.id,
      title,
      author,
      article
    };
    updatePost(updPost);
    M.toast({ html: "Post Updated", classes: "blue darken-4" });
    clearCurrent();
  };

  return (
    <div id="edit-post-modal" className="modal">
      <div className="modal-content">
        <h4>Edit Post</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="author"
              value={author}
              className="browser-default"
              onChange={e => setAuthor(e.target.value)}
            >
              <option>Select Author</option>
              <SelectOption />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="article"
              value={article}
              onChange={e => setArticle(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn"
          >
            Post It!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
