import { useState } from 'react';

import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';

function PostsList() {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return(
    <>
      <Modal>
        <NewPost 
          onBodyChange={bodyChangeHandler} 
          onAuthorChange={authorChangeHandler} 
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor}  body={enteredBody} />
        <Post author='Author 2' body='Body 2' />
        <Post author='Author 3' body='Body 3' />
      </ul>
    </>  
  );
}

export default PostsList;
