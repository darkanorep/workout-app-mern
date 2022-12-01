import {useEffect, useState} from 'react'

//components
import WokoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch ("/api/workouts")
            const json = await response.json()

            // console.log(json)
            if (response.ok) {
                setWorkouts(json)
            }
        }
    
    fetchWorkout()
    })
  return (
    <div>
        <div>
        {workouts && workouts.map(workout => (
            <WokoutDetails key={workout._id} workout={workout}/>
        ))}
        </div>
        <WorkoutForm/>
    </div>
  )
}

export default Home