const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutControllers")

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id',getWorkout)

//POST new workout
router.post('/', createWorkout)

//DELETE new workout
router.delete('/:id', deleteWorkout)

//UPDATE workout
router.patch('/:id', updateWorkout)

module.exports = router
