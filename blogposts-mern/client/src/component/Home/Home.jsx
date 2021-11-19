import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import { useSelector } from 'react-redux'

import Form from '../Form/Form';
import BlogPosts from '../BlogPosts/BlogPosts';

export default function Home() {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)
    const posts = useSelector((state) => state.posts);
  
    console.log('Current Posts: ', posts);
    
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch])
    
    return (
        <div>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <hr />
            <BlogPosts setCurrentId={setCurrentId}/>
        </div>
    )
}
