import React from 'react'
import moment from 'moment';
import {useDispatch} from 'react-redux'
import {deletePost} from '../../actions/posts';


export default function Post({post, setCurrentId, key}) {
    const dispatch = useDispatch();
    return (
        <div className="card article has-text-centered" key={post._id}>
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <p class="title article-title">
                {post.title}
              </p>
              <div class="tags has-addons level-item">
                <span class="tag is-rounded is-info">@{post.user}</span>
                <span class="tag is-rounded">{moment(post.createdAt).fromNow()}</span>
              </div>
            </div>
          </div>
          <div class="content article-body">
            <p>
              {post.body}
            </p>
          </div>
          <button className="button is-danger is-fullwidth" onClick={() => dispatch(deletePost(post._id))}>DELETE POST</button>
        </div>
      </div>
    )
}
