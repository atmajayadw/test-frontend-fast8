import React from "react";

const Navigation = ({ postsPerPage, totalPosts, next, prev, currentPage }) => {
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="navigation">
      {currentPage > 1 && (
        <div className="btn btn-prev" onClick={() => prev()}>
          {" "}
          {"<"} Previous Page
        </div>
      )}

      {currentPage < pageNumbers && (
        <div className="btn btn-next" onClick={() => next()}>
          Next Page{">"}
        </div>
      )}
    </div>
  );
};

export default Navigation;
