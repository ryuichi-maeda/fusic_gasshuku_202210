import Maeda from "./Maeda";

export default function MaedaOverlay() {
    const [ready, setReady] = useState(false)

    return (
        <>
            <Maeda />
            <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
                <div className="stack">
                    <button onClick={() => set(true)}>Click (needs fullscreen)</button>
                </div>
            </div>
        </>
    )
}
