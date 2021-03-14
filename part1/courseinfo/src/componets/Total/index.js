import React from 'react';

export default function Total({parts}) {
  console.log(parts)
    const reduceAssoc = parts
      .map((course) => course.exercises)
      .reduce((prev, next) => prev + next, 0)

    return (
        <p>
            <strong>Total of {reduceAssoc} exercices</strong>
        </p>
      )
}
