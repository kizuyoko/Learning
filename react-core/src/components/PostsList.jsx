import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function PostsList({ isPosting, onStopPosting }) {
  //Doable but not good because of infinitive loop. 
  //Better to use 'useEffect' instead
  // fetch('http://localhost:8080/posts')
  //   .then(response => response.json())
  //   .then(data => setPosts(data.posts));

  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false); 

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  const addPostHandler = (postData) => {
    setIsFetching(true);
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
    //console.log(posts)
    setIsFetching(false);
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
      {!isFetching && posts.length > 0 && (
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
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
      <div style={{color: 'white'}}><p>Loading data...</p></div>)}
    </>  
  );
}

export default PostsList;
