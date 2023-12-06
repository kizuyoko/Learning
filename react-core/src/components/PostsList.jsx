import { useState } from 'react';

import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  // let modalContent;
  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost 
  //         onBodyChange={bodyChangeHandler} 
  //         onAuthorChange={authorChangeHandler} 
  //       />
  //     </Modal>
  //   ); 
  // }

  return(
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost 
            onBodyChange={bodyChangeHandler} 
            onAuthorChange={authorChangeHandler} 
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor}  body={enteredBody} />
        <Post author='Author 2' body='Body 2' />
        <Post author='Author 3' body='Body 3' />
      </ul>
    </>  
  );
}

export default PostsList;
