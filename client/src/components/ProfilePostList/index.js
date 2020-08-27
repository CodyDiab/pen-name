import React from 'react';
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const ProfilePostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
 console.log(posts)
  return (
    <section className="section">
      <div className="container py-4">
        <h3 className="title has-text-left mb-3">{title}</h3>
        <div className="mb-6" >
        
        {posts &&
          posts.map(post => (
          <div key={post._id} className="box">
            <div className="media">
              <figure className="media-left">
                <p className="">
                <FontAwesomeIcon icon={faFeatherAlt} size="lg" alt="icon" style={{ color: '#D0B8B3' }}/>
                </p>
              </figure>
              <div className="media-content">
          <h3 className="title is-3 post-title" >{post.title}</h3>
                  <p className="subtitle is-size-6">
                    <Link
                      to={`/profile/${post.username}`}
                    >
                      {post.username}
                    </Link>{' '}
                    posted on {post.createdAt}
                  </p>
                <div className="content">
                  <Link to={`/post/${post._id}`}>
                    <p className="has-text-weight-normal is-size-5 ">{post.postText}</p>
                    <p className="mb-0 comments">
                    Comments: {post.commentCount} || Click to{' '}
                      {post.commentCount ? 'see' : 'start'} the discussion!
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        
    </div>
    </section>
  );
};

export default ProfilePostList;


// import React from 'react';

// import { Link } from 'react-router-dom';

// const ProfilePostList = ({ posts, title }) => {
//   if (!posts.length) {
//     return <h3>No Posts Yet</h3>;
//   }

//   return (
//     <div className="">
//       <h3>{title}</h3>
//       <div className="tile is-ancestor" >
//       <div class="tile is-vertical">
//       {posts &&
//         posts.map(post => (
//           <div key={post._id} className="tile is-parent">
//           <article className="tile is-child notification"  style={{backgroundColor:'#8C7D8A'}}>
//           <p className="title">Title</p>
//             <p className="subtitle">
//               <Link
//                 to={`/profile/${post.username}`}
//                 style={{ fontWeight: 700 }}
//                 className="text-light"
//               >
//                 {post.username}
//               </Link>{' '}
//               posted on {post.createdAt}
//             </p>
//             <div className="content">
//               <Link to={`/post/${post._id}`}>
//                 <p>{post.postText}</p>
//                 <p className="mb-0">
//                 Comments: {post.commentCount} || Click to{' '}
//                   {post.commentCount ? 'see' : 'start'} the discussion!
//                 </p>
//               </Link>
              
//               </div>

//             </article>
//           </div>

//         ))}
//         </div>
//         </div>
//     </div>
//   );
// };

// export default ProfilePostList;