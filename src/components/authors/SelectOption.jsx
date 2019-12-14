import React, { useContext } from "react";
import PostContext from "../../context/post/postContext";

const SelectOption = () => {
  const postContext = useContext(PostContext);
  const { authors, loading } = postContext;

  return (
    authors !== null &&
    !loading &&
    authors.map(author => (
      <option valye={`${author.firstName} ${author.lastName}`} key={author.id}>
        {author.firstName} {author.lastName}{" "}
      </option>
    ))
  );
};

export default SelectOption;
