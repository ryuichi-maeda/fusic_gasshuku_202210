import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ToDoApp from "./components/ToDoApp";
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
            <Route path="/brick-breaker" element={<Maeda />} />
            <Route path="/kawanishi" element={<Home />} />
            <Route path="toDoApp" element={<ToDoApp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
