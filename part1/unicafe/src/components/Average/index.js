
export default function Average({good, bad, neutral}) {
    const total = good + neutral + bad
    const average = (good - bad) / total

    return (
        <>{(Math.floor(average * 100) / 100).toFixed(2)}%</>
    )
}
