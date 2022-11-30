import {useEffect, useState} from 'react'

//components
import WokoutDetails from '../components/WorkoutDetails'

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
        {workouts && workouts.map(workout => (
            <WokoutDetails key={workout._id} workout={workout}/>
        ))}
    </div>
  )
}

export default Home