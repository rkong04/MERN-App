const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutControllers")
const requireAuth = require('../workoutAuth/requireAuth')

const router = express.Router()

//makes sure user authenticated before they can use workouts 
router.use(requireAuth)

router.get('/', getWorkouts)

router.get('/:id',getWorkout)

//POST new workout
router.post('/', createWorkout)

//DELETE new workout
router.delete('/:id', deleteWorkout)

//UPDATE workout
router.patch('/:id', updateWorkout)

module.exports = router
