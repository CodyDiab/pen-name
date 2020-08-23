import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../utils/mutations';

import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] }
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } }
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 500) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      await addPost({
        variables: { postText }
      });
  
      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div >
      <h4 className="title is-spaced is-4">New Post</h4>
      <p className={`m-0 ${characterCount === 500 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/500
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className=""
        onSubmit={handleFormSubmit}
      >
        <div class="field">
            <div class="control">
        <textarea
          placeholder="Write something..."
          value={postText}
          className="textarea"
          rows="10"
          onChange={handleChange}
        ></textarea>
        </div>
        </div>
        <div class="field">
            <div class="control">
        <button className="button is-fullwidth has-text-weight-bold" style={{background:'#8C7D8A', color:'#FFFFFF'}}type="submit">
          Submit
        </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;