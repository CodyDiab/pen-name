import React from 'react';
import { Link } from 'react-router-dom';

const FollowerList = ({ followerCount, username, followers }) => {
  if (!followers || !followers.length) {
    return <p className="bg-dark text-light p-3">{username} isnt following any writers</p>;
  }

  return (
    <div className="following">
      <h5 className="title is-5 mb-2 followcount" >
        {username} is following {followerCount} {followerCount === 1 ? 'writer' : 'writers'}
      </h5>
      {followers.map(follower => (
        <button className="button is-fullwidth is-inverted is-outlined mb-2" key={follower._id}>
          <Link  className="following" to={`/profile/${follower.username}`}>{follower.username} </Link>
        </button>
      ))}
    </div>
  );
};

export default FollowerList;