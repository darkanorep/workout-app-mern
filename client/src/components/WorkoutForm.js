import {useState} from 'react'

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const workout = {title, load, reps}
      
      const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        
        console.log(setError(json.error))
      }
      if (response.ok) {
        setError(null)
        setTitle('')
        setLoad('')
        setReps('')
        console.log('new workout added:', json)
      }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Workout Name: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Reps: </label>
            <input
                type="number"
                onChange = {(e) => setReps(e.target.value)}
                value={reps}
            />
            <label>Load in kg: </label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <button>Add</button>
            {error && <div className="error">{error}</div>}
        </form>
    </div>
  )
}

export default WorkoutForm