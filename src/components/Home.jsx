import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Link to="/3d" >3D</Link>
            <br />
            <Link to="/sunamoto" >sunamoto</Link>
            <br />
            <Link to="/kawanishi" >kawanishi</Link>
        </>
    )
}
