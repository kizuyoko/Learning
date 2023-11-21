import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';

//Changed import solution to lazy one.
//import BlogPage, { loader as postsLoader } from './pages/Blog';
import { lazy, Suspense } from 'react';
const BlogPage = lazy(() => import('./pages/Blog'));

//import PostPage, { loader as postLoader } from './pages/Post';
const PostPage = lazy(() => import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          { 
            index: true, 
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ), 
            //Lazy import
            loader: () => 
              import('./pages/Blog').then(module => module.loader()) 
          },
          { 
            path: ':id', 
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ), 
            loader: (meta) =>
              import('./pages/Post').then(module => module.loader(meta))
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
