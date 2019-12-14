import React, { useContext, useRef } from "react";
import PostContext from "../../context/post/postContext";

const NavBar = () => {
  const postContext = useContext(PostContext);
  const { searchPost } = postContext;

  const text = useRef("");

  const onChange = () => {
    searchPost(text.current.value);
  };

  return (
    <nav className="blue darken-4" style={{ marginBotton: "150px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={text}
              onChange={onChange}
              placeholder="Search Post......"
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
