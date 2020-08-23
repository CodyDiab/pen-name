import React from 'react';

import { Link } from 'react-router-dom';

const ProfilePostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <section className="section">
      <div className="container py-4">
      <h3 className="title has-text-left mb-3">{title}</h3>
      <div className="mb-6" >
      
      {posts &&
        posts.map(post => (
          <div key={post._id} className="box" style={{backgroundColor:'#F8F4F1'}}>
          <div class="media">
          <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png"/>
    </p>
  </figure>
            <div class="media-content">
          <h3 className="title is-3">Title</h3>
            <p className="subtitle">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{' '}
              posted on {post.createdAt}
            </p>
            <div className="content">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
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