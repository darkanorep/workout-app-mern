const express = require("express")

//try
const router = express.Router()
const {
    getWorkouts,
    createWorkout,
    getSpecificWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


//GET all workouts
router.get('/', getWorkouts)

//GET specific workout
router.get('/:id', getSpecificWorkout)

//Create new workout
router.post('/', createWorkout)

//DELETE specific workout
router.delete('/:id', deleteWorkout)

//UPDATE specific workout
router.patch('/:id', updateWorkout)

module.exports = router