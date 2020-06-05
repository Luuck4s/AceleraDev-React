import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setLike } from "./store/actions/actions";

import { v4 as uuid } from "uuid";

import Post from "./components/Post";
import Story from "./components/Story";
import Header from "./components/Header";

function App() {
  const { stories, posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLike = (id) => {
    dispatch(setLike(id));
  };

  return (
    <div>
      <Header />

      <div className="container">
        <section className="stories">
          <div className="stories__container">
            {stories.map((story) => (
              <Story key={uuid()} story={story} />
            ))}
          </div>
        </section>
      </div>

      <div className="container">
        <section className="feed">
          {posts.map((post) => (
            <Post key={uuid()} post={post} onClickLike={handleLike} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
