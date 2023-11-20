import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';
import classes from './AuthForm.module.css';

function AuthForm() {  
  // useActionData is React Router's hook and it provides the returned value from the previous navigation's action result, or undefined if there was no submission.
  const data = useActionData();

  // useNavigation is React Router hook and it tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations.
  const navigation = useNavigation(); 
  const isSubmitting = navigation.state == 'submitting';

  // useSearchParams is React Roputer's hook and it is used to read and modify the query string in the URL for the current location. Useally [searchParams, setSeacrhParams], just like useState.
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';


  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && <ul>
          {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}  
        </ul>}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
