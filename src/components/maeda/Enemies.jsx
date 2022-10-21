import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Enemy from "./Enemy";

export default function Enemies({ setReady, setGameState }) {
    const [enemyNum, setEnemyNum] = useState(100)
    const [clear, setClear] = useState(false)

    useFrame(() => {
        if (enemyNum == 0 && !clear) {
            setClear(true)
            setReady(false)
            setGameState(["CLEAR !!", "RESTART"])
        }
    })
    return (
        <>
            <Enemy color="orange" position={[5, 1, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="orange" position={[3, 1.5, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="orange" position={[1, 3, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="orange" position={[7, 4, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="hotpink" position={[-10, 11, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="hotpink" position={[-8, 9, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="hotpink" position={[-6, 5, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="hotpink" position={[-4, 4, 0]} setEnemyNum={setEnemyNum} />
            <Enemy color="hotpink" position={[-2, 11, 0]} setEnemyNum={setEnemyNum} />
        </>
    )
}
