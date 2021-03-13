import React from 'react'

export const Content = ({parts}) => {
  const listItems = parts.map((part) =>
    <p key={part.id}>{part.name} {part.exercises}</p>
  );
  return (
    listItems
  )
}