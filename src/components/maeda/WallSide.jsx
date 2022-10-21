import { useBox } from "@react-three/cannon"

export default function WallSide({ args = [1, 0.5, 3], color, ...props }) {
    const [ref] = useBox(() => ({ args, ...props }))
    return (
        <mesh ref={ref}>
            <boxGeometry args={args} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}
