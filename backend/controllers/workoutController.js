const Workout = require("./../model/workoutModel")
const mongoose = require("mongoose")

//get all workout
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//get specific workout
const getSpecificWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, reps, load } = req.body
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
    // res.json({mssg:"Post new workout"})
}

//delete specific workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(workout) {
        res.status(200).json({mssg: "Deleted successfully"})
    }
}

//update specific workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    try {
        await Workout.findByIdAndUpdate(id, req.body)

        const workout = await Workout.findById(id)
        
        res.status(200).json(workout)
    }

    catch(err){
        res.status(400).json({error:"Update Failed"})
    }
}

module.exports = {
    getWorkouts,
    createWorkout,
    getSpecificWorkout,
    deleteWorkout,
    updateWorkout
}