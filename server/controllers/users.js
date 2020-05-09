const express = require('express');

const users = require('../models/users');

const router = express.Router();

router.use(function(req, res, next) {
    console.log({ userID: req.userID })
    next();
});
router
    .post('/login', (req, res) => {
        try {
            const user = users.Login(req.body.username, req.body.password);
            res.send( { ...user, Password: undefined } );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })
    .get('/', (req, res) => {
        res.send({currUser:users.User[req.userID]})
    })

module.exports = router;