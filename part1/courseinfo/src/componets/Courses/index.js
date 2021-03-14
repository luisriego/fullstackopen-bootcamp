import React from 'react'

import Header from '../Header'
import {Content} from '../Parts'
import Total from '../Total'

export const Courses = ({courses}) => {
    
    return (
        <>
            {
                courses
                    .map((course) => {
                        return (
                                  <div key={course.id}>
                                    <Header course={course.name} />
                                    <Content parts={course.parts} />
                                    <Total parts={course.parts} />
                                </div>
                        )
                    })
            }
        </>
    )
}
