import React, { useState, useContext } from "react";
import PostContext from "../../context/post/postContext";
import M from "materialize-css/dist/js/materialize.min.js";

const AddAuthorModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postContext = useContext(PostContext);
  const { addAuthor } = postContext;

  const onSubmit = () => {
    const newAuthor = {
      firstName,
      lastName
    };
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Error! Go back and try again", classes: "red" });
      return;
    } else {
      addAuthor(newAuthor);

      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-author-modal" className="modal">
      <div className="modal-content">
        <h4>New Author</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="title" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
            <label htmlFor="title" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={onSubmit}
            href="#!"
            className="modal-close waves-effect blue waves-light btn"
          >
            Add Me!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAuthorModal;
