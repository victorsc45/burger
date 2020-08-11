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
    });

    router.post('/api/burgers', (req, res) => {
        burger.insertOne(
            ['burger_name', 'devoured'],
            [req.body.burger_name, req.body.devoured],
            function (result) {
                res.json({ id: result.insertId });
            });
    });
    router.put('/api/burgers/:id', (req, res) => {
        let condition = "id = " + req.params.id;
        console.log('condition', condition);
        burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
            if (result, changedRows === 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
    });
    router.deleteOne(condition, (req, res) => {
        let condition = "id = " + req.params.id;
        console.log("condition", condition);
        burger.deleteOne(condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
    });

});