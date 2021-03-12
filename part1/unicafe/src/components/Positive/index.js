
export default function Positive({good, bad, neutral}) {
    const total = good + neutral + bad
    const result = good / total * 100

    return (
        <>{(Math.floor(result * 100) / 100).toFixed(2)}%</>
    )
}