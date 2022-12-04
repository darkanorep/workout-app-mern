import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {

  const handleClick = async () => {
    const response = await fetch (`/api/workouts/${workout._id}`, {
      method: "DELETE"
    })

    if (response.ok) {
      console.log(`${workout.title} is successfully deleted`)
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handleClick}><i className='bx bx-trash'></i></span>
    </div>
  )
}

export default WorkoutDetails