import auth from "../firebase";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import ToDoApp from "./ToDoApp";
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
                        <Typography variant={"h5"} sx={{ m: "30px" }}>
                            選択
                        </Typography>
                    </Grid>

                    <Box mt={3}>
                        <Link to="/brick-breaker">
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                fullWidth
                            >
                                maeda
                            </Button>
                        </Link>
                    </Box>
                    <Box mt={3}>
                        <Link to="/toDoApp">
                            <Button
                                type="submit"
                                color="secondary"
                                variant="contained"
                                fullWidth
                            >
                                sunamoto
                            </Button>
                        </Link>
                    </Box>
                    <Box mt={3}>
                        <Link to="/kawanishi">
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                fullWidth
                            >
                                kawanishi
                            </Button>
                        </Link>
                    </Box>
                </Paper>
            </Grid>
        );
    }
};

export default Home;
