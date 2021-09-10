import React from "react";

const dashboard = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container dashboard">
      <div className="head">
        <div className="title">
          <h2>PERSONNEL LIST</h2>
          <h5>List of all personnels</h5>
        </div>
        <div className="buttons">
          <div className="input-group search">
            <input
              type="text"
              className="form-control"
              placeholder="Find Username"
            />
          </div>

          <div className="btn btn-add">ADD PERSONNEL</div>
        </div>
      </div>

      <div className="contents">
        {posts.map((post, index) => (
          <div className="content" key={index}>
            <div className="id">
              <p>
                Personnel ID: <span>{post.login.salt}</span>
              </p>
            </div>
            <hr />
            <div className="photo">
              <img
                src={post.picture.thumbnail}
                className="img-thumbnail"
                alt="thumbnail"
              ></img>
            </div>
            <div className="biodata">
              <ul>
                <li>
                  <p className="label">Name</p>
                  <p className="text">
                    {post.name.title} {post.name.first} {post.name.last}
                  </p>
                </li>
                <li>
                  <p className="label">Telephone</p>
                  <p className="text">{post.phone}</p>
                </li>
                <li>
                  <p className="label">Birthday</p>
                  <p className="text">{post.dob.date}</p>
                </li>
                <li>
                  <p className="label">Email</p>
                  <p className="text">{post.email}</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dashboard;
