require('dotenv').config()

const express = require("express")
const workoutRoutes = require("./workouts/workouts")
const mongoose = require("mongoose")

//express app
const app = express()


//middleware
app.use(express.json())
app.use((req, res, next ) => {
    // console.log(req.path, req.method)
    next()
})

//route
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen request
        app.listen(process.env.PORT, () => {
            console.log("listening on port ", process.env.PORT)
        })
        console.log("Successfully connected to db.")
    })
    .catch((error => {
        console.log(error.message)
    }))


process.env