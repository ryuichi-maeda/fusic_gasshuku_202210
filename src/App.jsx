import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Maeda from './components/maeda/Maeda';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/3d",
      element: <Maeda />,
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
