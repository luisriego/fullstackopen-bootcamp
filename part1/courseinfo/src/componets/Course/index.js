import React from 'react'

import Header from '../Header'
import {Content} from '../Parts'

export const Course = ({course}) => { 
  
  return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
      </div>
    )
}
