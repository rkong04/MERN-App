const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require("../controllers/workoutControllers")

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id',getWorkout)

//POST new workout
router.post('/', createWorkout)

//DELETE new workout
router.delete('/:id', (req,res) => {
    res.json({msg: 'delete new workout'})
})

//UPDATE workout
router.patch('/:id', (req,res) => {
    res.json({msg: 'update new workout'})
})

module.exports = router
