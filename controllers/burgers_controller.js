// set up the controller for the app, including routes

var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

//Create the router and the routes

// get request to select all and render the page with the handlebars index
router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// post request to add a new burger and set its devoured value to false 
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [
        req.body.burger_name, false
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

// put request to update the burger that was clicked in the list to be devoured: true
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;