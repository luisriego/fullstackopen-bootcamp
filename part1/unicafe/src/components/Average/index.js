import { useState } from "react";

export default function Average({good, bad, neutral}) {
    const total = good + neutral + bad
    const average = (good - bad) / total

    return (
        <>{average}%</>
    )
}