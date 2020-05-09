const express = require('express');

const food = require('../models/Food')

const router = express.Router();

router
    .get('/', (req, res) =>
        res.send({
            Food: food.foodList 
        }))
    .post('/addFood', (req,res)=> res.send(
        food.addFood(req.body.name, req.body.calories)
        ))
    .post('/removeFood', (req,res)=> res.send(
        food.removeFood(req.body.i)
        ))

module.exports = router;