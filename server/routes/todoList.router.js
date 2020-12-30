const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get ('/', (req, res) => {
    console.log('GET', req.user.id)
    const queryText = `SELECT * FROM "daily_pet_todo" WHERE "user_id" = $1 ORDER BY "id" asc`;
    pool.query(queryText, [req.user.id])
    .then((response) => res.send(response.rows))
    .catch((error) => {
        console.log('login registration failed:', error)
        res.sendStatus(500);
    });
})

router.put('/:id/:status', rejectUnauthenticated, (req, res) => {
    console.log('in PUT router', req.params, req.query)
    const queryText =`UPDATE daily_pet_todo SET completed = $1 WHERE id = $2;`
    pool.query(queryText, [req.params.status, req.params.id])
    .then((response) => res.sendStatus(200))
    .catch((error)=> {
        console.log('error in PUT router', error)
        res.sendStatus(500);
    });
});  
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('hello from delete router', req.params.id);
    const queryText =`DELETE FROM "daily_pet_todo" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then(() => res.sendStatus(201))
    .catch((error) => {
        console.log('user registration failed:', error);
        res.sendStatus(500);
    });
});
router.post('/', (req, res) => {
    const user_id = req.user.id;
    console.log('user id', user_id, req.body.text);
    const tasks =req.body.text;
    const queryText =`INSERT INTO "daily_pet_todo" (user_id, tasks) VALUES ($1, $2)`;
    pool.query(queryText, [user_id, tasks])
    .then(() => res.sendStatus(201))
    .catch((error) => {
        console.log('user registration failed:', error);
        res.sendStatus (500);
    });
});

module.exports = router;