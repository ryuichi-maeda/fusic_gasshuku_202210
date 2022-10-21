import { useBox } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"

export default function Paddle({ args = [10, 5, 3] }) {
    const [ref, api] = useBox(() => ({ args }))
    const { camera, gl } = useThree();

    useFrame((state) => {
        api.position.set((state.mouse.x * state.viewport.width) / 2, -state.viewport.height / 2, 0)
        api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 8)
        camera.position.set(0, -0.25, 25)
    })
    return (
        <mesh ref={ref}>
            <boxGeometry args={args} />
            <meshStandardMaterial color="lightblue" />
        </mesh>
    )
}
