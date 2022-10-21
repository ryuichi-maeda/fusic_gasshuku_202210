import { Canvas } from "@react-three/fiber";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import BrickBreaker from "./BrickBreaker";

export default function Maeda() {
    const user = useAuthContext()

    return user.user ? (
        <div className="maeda">
            <Canvas camera={{ position: [0, 10, 22], fov: 50 }}>
                <BrickBreaker />
            </Canvas>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}
