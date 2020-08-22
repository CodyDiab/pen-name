import React, {useState} from 'react';

import { Link } from 'react-router-dom';

const Feed = ({ posts, title }) => {
 
  const [viewFollowing, setViewFollowing] = useState(false);


  

 
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="container">

<div className="tabs is-centered">
      <ul>
        <li className={`${!viewFollowing && 'is-active'}`}><a onClick={() => setViewFollowing(false)}>View All</a></li>
        <li className={`${viewFollowing && 'is-active'}`}><a onClick={() => setViewFollowing(true)}>View Following</a></li>
        </ul>
    </div>
      {posts &&
        posts.map(post => (
          <section className="section">
          <div key={post._id} className="card">
            <p className="card-header">
        <Link className="title" to={`/post/${post._id}`}>{post.title}</Link>
              
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
              >  {post.username}
               </Link>
               <br></br>
               <time>
             {' '}
             {post.createdAt}
              </time>
              </p>
             

            </footer>
          </div>
          </section>
        ))}
    </div>
  );
};

export default Feed;
