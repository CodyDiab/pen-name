import React from 'react';

import Auth from '../utils/auth';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const SinglePost = props => {

  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div>
      <div style={{ marginTop:'25px', border: '1px solid #F2E9E4'}}>
        <div className='card' style={{ backgroundColor:'#8C7D8A' }}>
          <p className='title has-text-centered' style={{ color:'#D0B8B3' }}>
            {post.username}
          </p>
          <p className='subtitle has-text-centered' style={{ color:'#F2E9E4' }}>
            post on {post.createdAt}
          </p>
          
          <div className='card-content'>
            <p style={{ color:'#F2E9E4' }} className="title">{post.title}</p>
            <p style={{ color:'#F2E9E4' }}>{post.postText}</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        {post.commentCount > 0 && <CommentList comments={post.comments} />}
        {Auth.loggedIn() && <CommentForm postId={post._id} />}
      </div>
    </div>

    
  );
};

export default SinglePost;
