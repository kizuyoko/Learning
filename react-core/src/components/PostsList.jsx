import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import { useState } from 'react';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
    //console.log(posts)
  };

  return(
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => 
            <Post
              key={post.id} 
              author={post.author} 
              body={post.body} 
            />
          )}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>  
  );
}

export default PostsList;
