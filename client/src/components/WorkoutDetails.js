import React from 'react'

const WorkoutDetails = ({workout}) => {

  const deleteWorkout = async () => {
    const response = await fetch (`/api/workouts/${workout._id}`, {
      method: "DELETE"
    })

    if (response.ok) {
      console.log(`${workout.title} is successfully deleted`)
    }
  }

  return (
    <div>
        <h2>{workout.title}</h2>
        <p><strong>Reps: {workout.reps}</strong></p>
        <p><strong>Load in kg: {workout.load}</strong></p>
        <p>{workout.createdAt}</p>
        <button onClick={deleteWorkout}>Delete</button>
    </div>
  )
}

export default WorkoutDetails