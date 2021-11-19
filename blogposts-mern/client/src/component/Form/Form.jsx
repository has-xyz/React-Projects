import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../actions/posts";

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ title: "", body: "" });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({title: "", body: ""});
}

  return (
    <div className='container'>
      <h1 className="title has-text-centered">Blog Form</h1>
      <div className="columns is-centered">
      <form onSubmit={handleSubmit} className="form column">
        <div className="field is-fullwidth">
          <p className="control">
            <input 
             className="input" 
             type="text" 
             placeholder="Blog title" 
             name='title'
             value={postData.title} 
             onChange={(e) => setPostData({...postData, title: e.target.value})}/>
          </p>
        </div>
        <div className="field">
          <p className="control">
          <textarea 
           className="textarea" 
           placeholder="Blog message" 
           name='body'
           value={postData.body} 
           onChange={(e) => setPostData({...postData, body: e.target.value})}></textarea>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success is-fullwidth" type="submit">Post</button>
          </p>
        </div>
      </form>
      </div>
    </div>
  );
}
