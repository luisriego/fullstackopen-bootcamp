import { useState } from "react";

export default function Positive({good, bad, neutral}) {
    const total = good + neutral + bad

    return (
        <>{good / total * 100}%</>
    )
}