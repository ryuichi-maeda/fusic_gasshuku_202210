import auth from "../firebase";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const user = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  if (user.user == null) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <Link to="/maeda">maeda</Link>
        <br />
        <Link to="/sunamoto">sunamoto</Link>
        <br />
        <Link to="/kawanishi">kawanishi</Link>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;
