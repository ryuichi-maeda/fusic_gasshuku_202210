import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/maeda",
      element: <Home />,
    },
    {
      path: "/sunamoto",
      element: <Home />,
    },
    {
      path: "/kawanishi",
      element: <Home />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
