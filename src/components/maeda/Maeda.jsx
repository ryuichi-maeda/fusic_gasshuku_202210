import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import PinBall from "./PinBall";
import Tutorial from "./Tutorial/Tutorial";

export default function Maeda() {

    return (
        <div className="maeda">
            <Canvas camera={{ position: [0, 10, 22], fov: 50 }}>
                <PinBall />
            </Canvas>
        </div>
    )
}
