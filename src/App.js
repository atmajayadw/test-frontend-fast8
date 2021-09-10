import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=28");
      setPosts(res.data.results);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Navbar />
      <section id="dashboard">
        <Dashboard posts={currentPosts} loading={loading} />
        <Navigation
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          currentPage={currentPage}
          next={next}
          prev={prev}
        />
      </section>
    </div>
  );
};

export default App;
