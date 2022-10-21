import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
  ]);
  return (
    <AuthProvider>
      <div style={{ margin: "2em" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/3d" element={<Maeda />} />
            <Route path="/sunamoto" element={<Home />} />
            <Route path="/kawanishi" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
