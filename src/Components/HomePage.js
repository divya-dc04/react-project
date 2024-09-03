import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PostList({ newPost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    const parsedPosts = JSON.parse(storedPosts) || [];
    setPosts(parsedPosts);
  }, [newPost]);

  function likePost(index) {
    const updatedPosts = [...posts];
    updatedPosts[index].likes = (updatedPosts[index].likes || 0) + 1;

    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  }

  function removePost(index) {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  }

  return (
    <div className="post-list">
        <h1>Instagram</h1>
        {posts.map((post, index) => (
            <div key={index} className="card mb-3">
                <img src={post.imageUrl} className="card-img-top" alt="Post" />
                <div className="card-body">
                    <p className="card-text">{post.caption}</p>
                    <div className="buttons">
                    <button className="btn btn-success" onClick={() => likePost(index)}>
                        Like
                    </button>
                    <button className="btn btn-danger" onClick={() => removePost(index)}>
                        Delete
                    </button>
                    <span>{post.likes} like</span>
                    </div>
                </div>
            </div>
        ))}

        <div className='addpost'>
            <h3>Add more posts</h3>
            {/* <button className='butn'>Add</button> */}

            <p> <Link to="/modal"> Add </Link> </p>
        </div>
    </div>
  );
}

