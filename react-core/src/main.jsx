import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, { loader as postsLoader } from './routes/Posts'
import './index.css'
import NewPost, { action as newPostsAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    
    // Inside of Outlet in RootLayout. 
    children: [
      { 
        path: '/', 
        element: <Posts />, 
        loader: postsLoader,
        children: [
          { 
            path: '/create-post', 
            element: <NewPost />, 
            action: newPostsAction 
          }
        ] 
      },
    ] 
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
