const express = require('express');
const router = express.Router();

const Exercises = require('../models/Exercise');

router
    .get ("/", (req,res)=> res.send({
        Exercise: Exercises.exerciseList
    }))
    .post('/addExercise', (req,res)=> res.send(
        Exercises.addExercise(req.body.exercise)
        ))
    .post('/removeExercise', (req,res)=> res.send(
        Exercises.removeExercise(req.body.i)
        ))

module.exports = router;
