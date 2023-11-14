import { 
  createBrowserRouter, 
  RouterProvider, 
  // for older version - createRoutesFromElements, Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductsDetailPage from './pages/ProductDetail'

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
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />}, //You do not need to write path: ''
      { path: 'products', element: <ProductsPage />},
      //Semicolon is to show dynamic
      { path: 'products/:productId', element: <ProductsDetailPage />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
