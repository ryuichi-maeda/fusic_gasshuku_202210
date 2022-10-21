import auth from "../firebase";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    auth.signInWithEmailAndPassword(email.value, password.value);
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザー登録は<Link to="/signup">こちら</Link>から
        </div>
      </form>
    </div>
  );
};

export default Login;
