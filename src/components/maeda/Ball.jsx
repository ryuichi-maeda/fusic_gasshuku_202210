import { usePlane, useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"

export default function Ball({ args = [0.5, 32, 32], setReady, setGameState, position, life, setLife }) {
    const { viewport } = useThree()
    const [ref, api] = useSphere(() => ({
        args: [0.5],
        mass: 1,
        position: position,
    }))

    // Invisible plane, if hit it respawns the ball
    usePlane(() => ({
        // Invisible plane の場所
        position: [0, -viewport.height, 0],
        rotation: [-Math.PI / 2, 0, 0],

        onCollide: () => {
            // ボールが落ちた時の処理
            // 初期位置
            api.position.set(0, 0, 0)
            // 初期飛び方向
            api.velocity.set(0, 10, 0)

            setLife((prevState) => prevState - 1)
        },
    }))
    useFrame(() => {
        if (life <= 0) {
            setReady(false)
            setLife(3)
            setGameState(["OVER", "RESTART"])
        }
    })
    return (
        <mesh ref={ref} castShadow receiveShadow>
            <sphereGeometry args={args} position={position} />
            <meshStandardMaterial color="#ea7600" />
        </mesh>
    )
}
