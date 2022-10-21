import auth from "../firebase";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Grid>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "70vh",
          width: "280px",
          m: "20px auto",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
          alignItems="center"
        >
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            アカウント作成
          </Typography>
          {error && (
            <p style={{ color: "red" }}>
              {"メールアドレスまたはパスワードが正しくありません"}
            </p>
          )}
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="email"
            name="email"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            type="password"
            label="password"
            variant="standard"
            name="password"
            fullWidth
            required
          />
          {/* ラベルとチェックボックス */}
          <Box mt={3}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              作成
            </Button>
            <Typography variant="caption" display="block">
              アカウントを持っていますか？
              <Link to="/login">登録済みの方</Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
