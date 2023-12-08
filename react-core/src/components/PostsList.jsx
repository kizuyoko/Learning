import classes from './PostsList.module.css';
import Post from './Post';
// import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData();

  // Ordinaly solution to fetch data, without React Router. 
  //const [posts, setPosts] = useState([]);
  //const [isFetching, setIsFetching] = useState(false); 
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     // fetching data config is moved to loader() in Posts.jsx to use reactRouter in main.jsx.
  //     // const response = await fetch('http://localhost:8080/posts');
  //     // const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  //const addPostHandler = (postData) => {
    //setIsFetching(true);
    // fetch('http://localhost:8080/posts', {
    //   method: 'POST',
    //   body: JSON.stringify(postData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    // setPosts((existingPosts) => [postData, ...existingPosts]);
    //console.log(posts)
    //setIsFetching(false);
  //};

  return(
    <>
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
      {/* {isFetching && (
      <div style={{color: 'white'}}><p>Loading data...</p></div>)} */}
    </>  
  );
}

export default PostsList;
