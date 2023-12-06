import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }) {
  return(
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting}/>
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author='Author 3' body='Body 3' />
      </ul>
    </>  
  );
}

export default PostsList;
