import React, { useEffect, Fragment } from "react";
import NavBar from "./components/layouts/NavBar";
import AddBtn from "./components/layouts/AddBtn";
import Post from "./components/posts/Post";
import AddPostModal from "./components/posts/AddPostModal";
import EditPostModal from "./components/posts/EditPostModal";
import AddAuthorModal from "./components/authors/AddAuthorModal";
import PostState from "./context/post/PostState";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();

    //eslint-disable-next-line
  }, []);
  return (
    <PostState>
      <Fragment>
        <NavBar />
        <div className="container">
          <Post />
          <AddBtn />
          <AddPostModal />
          <EditPostModal />
          <AddAuthorModal />
        </div>
      </Fragment>
    </PostState>
  );
};

export default App;
