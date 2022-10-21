import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: "2em" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
