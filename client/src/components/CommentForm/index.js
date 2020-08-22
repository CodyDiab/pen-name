import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';



const CommentForm = ({ postId }) => {

    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
     setBody(event.target.value);
        setCharacterCount(event.target.value.length);
    }
        };

        const handleFormSubmit = async event => {
            event.preventDefault();
          
            try {
              await addComment({
                variables: { commentBody, postId }
              });
          
              // clear form value
              setBody('');
              setCharacterCount(0);
            } catch (e) {
              console.error(e);
            }
          };

  return (
    <div>
      <p className={`${characterCount === 280 }`} style={{ color:'#F2E9E4' }}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className=""
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Leave a comment on this post..."
          value={commentBody}
          className="textarea is-medium"
          onChange={handleChange}
          rows="3"
        ></textarea>

        <button className='button is-normal is-rounded' type="submit" style={{ marginTop:'5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;