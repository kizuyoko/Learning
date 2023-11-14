import { 
  createBrowserRouter, 
  RouterProvider, 
  // for older version - createRoutesFromElements, Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';

// Older version. You need to import createRoutesFromElements and Route from 'react-router-dom'
// const routeDifinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// );

// Object solution, latest version.
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <Products />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
