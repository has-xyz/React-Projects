import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

export default function BlogPosts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  console.log("Current Posts: ", posts);

  return posts.length ? (
    <div className="container">
      <section className="articles">
        <div className="columns is-centered">
          <div className="column">
            {posts.map((post) => (
              <>
                <Post post={post} setCurrentId={setCurrentId} key={post._id}/>
                <br />
                <br />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  ) : null;
}
