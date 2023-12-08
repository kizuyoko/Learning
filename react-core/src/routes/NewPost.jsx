//import { useState } from 'react';
import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {
  // const [ enteredBody, setEnteredBody ] = useState('');
  // const [ enteredAuthor, setEnteredAuthor ] = useState('');

  // const bodyChangeHandler = (event) => {
  //   setEnteredBody(event.target.value);
  // };

  // const authorChangeHandler = (event) => {
  //   setEnteredAuthor(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const postData = {
  //     id: 'id' + Math.floor(Math.random() * 100000),
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };
  //   //onAddPost(postData);
  //   //onCancel();
  // };

  return (
    <>
      <Modal>
        <Form method='post' className={classes.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea 
              id="body" 
              name='body'
              required 
              rows={3} 
            />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            <input 
              type="text" 
              id="name" 
              name='author'
              required 
            />
          </p>
          <p className={classes.actions}>
            <Link type='button' to='/'>Cancel</Link>
            <button type='submit'>Submit</button>
          </p>
        </Form>
      </Modal>  
    </>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}