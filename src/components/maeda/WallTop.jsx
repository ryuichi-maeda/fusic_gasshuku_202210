import { useBox } from "@react-three/cannon"

export default function WallTop() {
    const args = [100, 100, 1]
    const position = [0, 60, 0]
    const color = "lightblue"
    const [ref] = useBox(() => ({
        args: args,
        position: position,
        color: color,
    }))
    return (
        <mesh ref={ref}>
            <boxGeometry args={args} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}
