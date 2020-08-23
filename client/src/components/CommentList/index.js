import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
  return (
    <div>
        <div style={{ marginTop:'10px', border: '1px solid #F2E9E4' }}>
            <div className='card' style={{ backgroundColor:'#8C7D8A' }}> 
                <p className='title has-text-centered' style={{ color:'#D0B8B3', borderBottom:'5px double #22223B75' }}>
                    Comments
                </p>
                <div className='card-content'>
                    {comments &&
                    comments.map(comment => (
                    <div className="has-text-centered" key={comment._id} style={{ color:'#D0B8B3' }}>
                        <p style={{ color:'#F2E9E4' }}>
                            {comment.commentBody}
                        </p>
                        <Link to={`/profile/${comment.username}`} style={{ fontWeight: 700, color:'#22223B' }}>
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