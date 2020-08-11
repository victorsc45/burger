const express = require('express');
const burger = require("../models/burger");

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    })
});
router.post('/api/burgers', (req, res) => {
    burger.insertOne(
        ['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertId });
        }
    )
})
router.put('/api/burgers/:id', (req, res)[

])
