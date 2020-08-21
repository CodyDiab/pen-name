import React from 'react';

import { Link } from 'react-router-dom';

const Feed = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="container">

      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card">
            <p className="card-header">
            <Link className="title" to={`/post/${post._id}`}>Title</Link>
              
            </p>
            <div className="card-content">

              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                Comments: {post.commentCount} || Click to{' '}
                  {post.commentCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                Author:
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                
                {post.username}
              </Link>{' '}
              post on {post.createdAt}
              </p>

            </footer>
          </div>
        ))}
    </div>
  );
};

export default Feed;
