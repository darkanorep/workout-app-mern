import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div>
        <a href={`api/workouts/${workout._id}`}><h2>{workout.title}</h2></a>
        <p><strong>Reps: {workout.reps}</strong></p>
        <p><strong>Load: {workout.load}(kg)</strong></p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails