import React from 'react'

import Header from '../Header'
import {Content} from '../Parts'
import Total from '../Total'

export const Course = ({course}) => { 
  
  return (
      <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
}
