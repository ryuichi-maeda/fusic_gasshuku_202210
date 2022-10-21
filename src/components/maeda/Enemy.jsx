import { useBox, usePlane } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

export default function Enemy({ args = [2, 0.5, 1], color, position, setEnemyNum }) {
    const [ref, api] = useBox(() => ({
        args: args,
        position: position,
        onCollide: () => {
            api.position.set(100, 0, 0)
            setEnemyNum((prevState) => prevState - 1)
        }
    }))

    return (
        <mesh ref={ref}>
            <boxGeometry args={args} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}
