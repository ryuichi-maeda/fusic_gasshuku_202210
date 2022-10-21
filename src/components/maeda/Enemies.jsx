import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Enemy from "./Enemy";

export default function Enemies({ setReady, setGameState, setLife }) {
    const [enemyNum, setEnemyNum] = useState(10)
    const [clear, setClear] = useState(false)

    useFrame(() => {
        if (enemyNum == 0 && !clear) {
            setClear(true)
            setReady(false)
            setEnemyNum(10)
            setLife(3)
            setGameState(["CLEAR !!", "RESTART"])
        }
    })

    // ランキング作成用にデータ保存
    // const user = useAuthContext()

    // [-9 ~ 9, -5 ~ 7, 0]
    return (
        <>
            {(() => {
                const items = []
                for (let i = 0; i < 10; i++) {
                    let x = Math.floor(Math.random() * 19) - 9
                    let y = Math.floor(Math.random() * 13) - 5
                    items.push(<Enemy key={i} color="blue" position={[x, y, 0]} setEnemyNum={setEnemyNum} />)
                }
                return items
            })()}
        </>
    )
}
