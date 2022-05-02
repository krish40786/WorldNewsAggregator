const express = require("express");


// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const siteRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


siteRoutes.route("/site/:siteName").get(function(req, res) {
    let db_connect = dbo.getDb("sites");
    console.log(req)
    let myquery = { site:  req.params.siteName };
    db_connect
        .collection("siteNames")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
});

siteRoutes.route("/site/add").post(function(req, response){
    let db_connect = dbo.getDb();
    let myobj = {
        site: req.body.site,
        picLink: req.body.link,
    };
    db_connect.collection("siteNames").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

module.exports = siteRoutes;