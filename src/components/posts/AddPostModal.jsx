import React, { useContext, useState } from "react";
import PostContext from "../../context/post/postContext";
import SelectOption from "../authors/SelectOption";
import M from "materialize-css/dist/js/materialize.min.js";

const AddPostModal = () => {
  const postContext = useContext(PostContext);
  const { addPost } = postContext;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");

  const onSubmit = () => {
    const newPost = {
      title,
      author,
      article
    };

    if (title === "" || author === "" || article === "") {
      M.toast({ html: "Error! Go back and try again ", classes: "red" });
      return;
    } else {
      addPost(newPost);
      M.toast({ html: "New Post Added", classes: "blue darken-4" });
      setTitle("");
      setAuthor("");
      setArticle("");
    }
  };

  return (
    <div id="add-post-modal" className="modal">
      <div className="modal-content">
        <h4>New Post</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <label htmlFor="title" className="active">
              Title
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="article"
              value={article}
              onChange={e => setArticle(e.target.value)}
              required
            />
            <label htmlFor="article" className="active">
              Article
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="author"
              value={author}
              className="browser-default"
              onChange={e => setAuthor(e.target.value)}
              required
            >
              <option> Select Author</option>
              <SelectOption />
            </select>
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

export default AddPostModal;
