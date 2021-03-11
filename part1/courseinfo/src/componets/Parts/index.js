import React from 'react'

export const Content = ({parts}) => {
  const listItems = parts.map((part, i) =>
    <p key={i}>{part.name} {part.exercises}</p>
  );
  return (
    listItems
  )
}