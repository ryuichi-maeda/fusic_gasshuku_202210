import { useFrame, useThree } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Ball from "./Ball"
import Paddle from "./Paddle"
import WallTop from "./WallTop"
import { useEffect, useState } from "react"
import Enemies from "./Enemies"
import { Center, OrbitControls, Text, Text3D } from "@react-three/drei"


export default function BrickBreaker() {
    const [ready, setReady] = useState(false)
    const [gameState, setGameState] = useState(["START", "START"])

    const [rotationY, setRotationY] = useState(0)

    const [life, setLife] = useState(3)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    useFrame((state, delta) => {
        setRotationY((prevState) => prevState + 0.005)
    })

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.code === 'Space') {
                event.preventDefault();

                // game start
                setReady(true)
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [])

    return (
        <>
            {ready
                ? (
                    <>
                        <ambientLight intensity={0.3} />
                        <pointLight position={[10, 10, 5]} />
                        <pointLight position={[-10, -10, -5]} />
                        <Physics gravity={[0, 0, 0]} defaultContactMaterial={{ restitution: 1.1 }} >
                            <Ball position={[14.5, -8, 0]} />
                        </Physics>
                        <Text
                            position={[16, -8, 0]}
                            fontSize={1}
                            color={'#222'}>
                            x {life}
                        </Text>
                        <Physics gravity={[0, -30, 0]} defaultContactMaterial={{ restitution: 1.1 }}>
                            <Ball setReady={setReady} setGameState={setGameState} life={life} setLife={setLife} />
                            <Paddle />
                            <Enemies setReady={setReady} setGameState={setGameState} setLife={setLife} />
                            <WallTop />
                        </Physics>
                    </>
                )
                : (
                    <>
                        <ambientLight />
                        <directionalLight position={[10, 10, 10]} />
                        <Center rotation={[6, rotationY, 0]}>
                            <Center
                                position={[0, 0, 0]}
                                rotation={[0, 0, 0]}
                            >
                                <Text3D
                                    curveSegments={32}
                                    bevelEnabled
                                    bevelSize={0.04}
                                    bevelThickness={0.1}
                                    height={0.5}
                                    lineHeight={0.5}
                                    letterSpacing={0.05}
                                    size={2}
                                    font="/Inter_Bold.json">
                                    GAME {gameState[0]}
                                    <meshNormalMaterial />
                                </Text3D>
                            </Center>
                            <Center
                                position={[0, -3, 0]}
                                rotation={[0, 0, 0]}
                            >
                                <Text3D
                                    curveSegments={32}
                                    bevelEnabled
                                    bevelSize={0.04}
                                    bevelThickness={0.1}
                                    height={0.5}
                                    lineHeight={0.5}
                                    letterSpacing={0.05}
                                    size={0.7}
                                    font="/Inter_Bold.json">
                                    PRESS "SPACE" TO {gameState[1]}
                                    <meshNormalMaterial />
                                </Text3D>
                            </Center>
                        </Center>
                        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                    </>
                )
            }

        </>
    )
}
