import classes from './PostsList.module.css';
import Post from './Post';

function PostsList() {
  return(
    <ul className={classes.posts}>
      <Post author='Author 1' body='Body 1' />
      <Post author='Author 2' body='Body 2' />
      <Post author='Author 3' body='Body 3' />
    </ul>
  );
}

export default PostsList;
