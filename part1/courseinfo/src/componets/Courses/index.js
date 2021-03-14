import React from 'react'

import { Course } from '../Course'

export const Courses = ({courses}) => {
    
    return (
        <>
            {
                courses.map((course) => {
                    return (
                        <div key={course.id}>
                            <Course course={course} />
                        </div>
                    )
                })
            }
        </>
    )
}
