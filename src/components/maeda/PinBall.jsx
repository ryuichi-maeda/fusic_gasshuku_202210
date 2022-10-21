import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Physics, useBox } from "@react-three/cannon"
import Ball from "./Ball"
import Paddle from "./Paddle"
import Enemy from "./Enemy"
import WallSide from "./WallSide"
import WallTop from "./WallTop"
import { useEffect, useRef, useState } from "react"
import Enemies from "./Enemies"
import { Center, OrbitControls, Text, Text3D } from "@react-three/drei"


export default function PinBall() {
    const [ready, setReady] = useState(false)
    const [gameState, setGameState] = useState(["START", "START"])

    const [rotationY, setRotationY] = useState(0)
    const { camera, gl } = useThree();

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    useFrame((state, delta) => { setRotationY((prevState) => prevState + 0.005) })

    useEffect(() => {
        const keyDownHandler = event => {
            console.log('User pressed: ', event.code);

            if (event.code === 'Space') {
                event.preventDefault();

                // reset camera position
                camera.position.set(0, 10, 22)

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
                        <Text
                            position={[0, 0, 0]}
                            fontSize={2}
                            color={'#222'}>
                        </Text>
                        <Physics gravity={[0, -30, 0]} defaultContactMaterial={{ restitution: 1.1 }}>
                            <Ball setReady={setReady} setGameState={setGameState} />
                            <Paddle />
                            {/* <Enemy color="orange" position={[5, 1, 0]} />
                            <Enemy color="orange" position={[3, 1.5, 0]} />
                            <Enemy color="orange" position={[1, 3, 0]} />
                            <Enemy color="orange" position={[7, 4, 0]} />
                            <Enemy color="hotpink" position={[-10, 11, 0]} />
                            <Enemy color="hotpink" position={[-8, 9, 0]} />
                            <Enemy color="hotpink" position={[-6, 5, 0]} />
                            <Enemy color="hotpink" position={[-4, 4, 0]} />
                            <Enemy color="hotpink" position={[-2, 11, 0]} /> */}
                            <Enemies setReady={setReady} setGameState={setGameState} />
                            <WallTop />
                        </Physics>
                    </>
                )
                : (
                    <>
                        {/* <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <mesh
                            ref={mesh}
                            scale={1.5}
                            position={[0, 0, 0]}
                            onClick={() => setReady(true)}
                            onPointerOver={(event) => setHover(true)}
                            onPointerOut={(event) => setHover(false)}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
                        </mesh> */}

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
