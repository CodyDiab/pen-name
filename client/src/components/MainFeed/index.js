import React, {useState} from 'react';
// import { useParams } from 'react-router-dom'; //Redirect,
import { Link } from 'react-router-dom';
// import { useQuery} from '@apollo/react-hooks';
// import {QUERY_ME_BASIC,QUERY_POSTS} from '../../utils/queries';
import Auth from '../../utils/auth'

const Feed = ({ posts,userData}) => {
  
  const [viewFollowing, setViewFollowing] = useState(false);
  var followingUsers =[]

 


 
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

if(!viewFollowing) {
  return (
    <div className="container">

<div className="tabs is-centered">
      <ul>
        <li className= 'is-active'><a onClick={() => setViewFollowing(false)}>View All</a></li>
        {Auth.loggedIn() ? (
        <li className=''><a onClick={() => setViewFollowing(true)}>View Following</a></li>
        ):(<li>log in to view followed posts</li>)}
        </ul>
    
    </div>
      {posts &&
        posts.map(post => (
          <section className="section">
          <div key={post._id} className="card">
            <p className="card-header">
        <Link className="" to={`/post/${post._id}`}>{post.title}</Link>
              
            </p>
            <div className="card-content">

              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <span className="tag is-rounded">
                Comments: {post.commentCount} || Click to{' '}
                  {post.commentCount ? 'see' : 'start'} the discussion!
                </span>
              </Link>
            </div>
           
            <footer className="card-footer">
              <div className="tags has-addons">
              <span className="tag ">
                Author:
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                
              >  {post.username}
               </Link><br/>
               </span>
               <span className="tag is-light">
             {' '}
             {post.createdAt}
              </span>
              </div>
             

            </footer>
          </div>
          </section>
        ))}
    </div>);
        } else  {
            
          userData.me.followers.map( follower => followingUsers.push(follower.username))
  console.log(followingUsers)
 
  const sortByFollowing = (array) => {
    
    const sorted = []
    array.forEach(e => {
      let sort = posts.filter(post => post.username == e)
      sorted.push(sort)
    });

     return sorted
   
  }
  console.log(sortByFollowing(followingUsers))
  const preSort = sortByFollowing(followingUsers)

  const joinFollowPosts = (array) => {
    const outPut = []
    array.forEach(e => {
      e.forEach(el => {
        outPut.push(el)
      })
    })
    return outPut
  }
  //  console.log(joinFollowPosts(preSort))
const sortedByFollowing=(joinFollowPosts(preSort))
console.log(sortedByFollowing);

          return (
            <div className="container">
        
        <div className="tabs is-centered">
              <ul>
                <li className=''><a onClick={()=>setViewFollowing(false)}>View All</a></li>
                <li className='is-active'><a onClick={()=>setViewFollowing(true)}>View Following</a></li>
                </ul>
            
            </div>
              {
              joinFollowPosts(preSort).map(post => (
                  <section className="section">
                  <div key={post._id} className="card">
                    <p className="card-header">
                <Link className="" to={`/post/${post._id}`}>{post.title}</Link>
                      
                    </p>
                    <div className="card-content">
        
                      <Link to={`/post/${post._id}`}>
                        <p>{post.postText}</p>
                        <p className="tag is-rounded">
                        Comments: {post.commentCount} || Click to{' '}
                          {post.commentCount ? 'see' : 'start'} the discussion!
                        </p>
                      </Link>
                    </div>
                   
                    <footer className="card-footer">
                    <div className="tags has-addons">
                      <span className="tag ">
                      Author:
                      <Link
                       to={`/profile/${post.username}`}
                       style={{ fontWeight: 700 }}>
                
                   {post.username}
                   </Link><br/>
                   </span>
                   <span className="tag is-light">
                   {' '}
                   {post.createdAt}
                  </span>
                  </div>
             

                   </footer>
                  </div>
                  </section>
                ))}
            </div>);
        }
  
};

export default Feed;
