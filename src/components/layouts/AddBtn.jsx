import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-post-modal"
        className="modal-trigger btn-floating btn-large blue tooltipped"
        data-position="left"
        data-tooltip="Add a post"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#add-author-modal"
            className=" modal-trigger btn-floating red tooltipped"
            data-position="left"
            data-tooltip="Add an author"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
