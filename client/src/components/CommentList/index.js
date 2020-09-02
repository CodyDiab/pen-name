import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
  return (
    <div>
        <div style={{ marginTop:'18px' }}>
            <div className='card' > 
                <p className='title has-text-centered comment-section' >
                    Comments
                </p>
                <div className='card-content'>
                    {comments &&
                    comments.map(comment => (
                    <div className="has-text-centered comment-date" key={comment._id}>
                        <p className='post-text'>
                            {comment.commentBody}
                        </p>
                        <Link to={`/profile/${comment.username}`} style={{ fontWeight: 700}}>
                        {comment.username} 
                        </Link> on {comment.createdAt}
                    </div>
                    ))}
                </div>
            </div>   
        </div>
    </div>

  );
};

export default CommentList;