const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.post('/', (req, res) => {
    const user_id = req.user.id;
    console.log('user id', user_id, req.body);
    const walk =req.body.walk;
    const queryText =`INSERT INTO "walk" (user_id, question_one, question_two, 
    question_three, question_four, question_five, question_six, question_seven, question_eight,
    question_nine, question_ten, date) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
    pool.query(queryText, [
        user_id, 
        req.body.questionOne,
        req.body.questionTwo,
        req.body.questionThree,
        req.body.questionFour,
        req.body.questionFive,
        req.body.questionSix,
        req.body.questionSeven,
        req.body.questionEight,
        req.body.questionNine,
        req.body.questionTen,
        req.body.date
    ])
    .then(() => res.sendStatus(201))
    .catch((error) => {
        console.log('user registration failed:', error);
        res.sendStatus (500);
    });
});

router.get ('/', (req, res) => {
    console.log('GET', req.user.id)
    const queryText = `SELECT * FROM "walk" WHERE "user_id" = $1 ORDER BY "id" asc`;
    pool.query(queryText, [req.user.id])
    .then((response) => res.send(response.rows))
    .catch((error) => {
        console.log('login registration failed:', error)
        res.sendStatus(500);
    });
})


module.exports = router;