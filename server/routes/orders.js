const express = require("express");
const orderRoutes = express.Router();
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// get a list of all the orders.
orderRoutes.route("/orders").get(function (req, res) {
 let db_connect = dbo.getDb("webshop");
 db_connect
   .collection("orders")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// get a single order by id
orderRoutes.route("/orders/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("orders")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// create a new order.
orderRoutes.route("/orders/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   buyer: req.body.buyer,
   products: req.body.products,
   completed:false,
 };
 db_connect.collection("orders").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// update an order by id.
orderRoutes.route("/orders/update/:id").put(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     buyer: req.body.buyer,
     products: req.body.products,
     completed: req.body.completed,
   },
 };
 db_connect
   .collection("orders")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// delete an order
orderRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = orderRoutes;