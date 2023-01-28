const routes = require("express").Router();

routes.use('/', require('./swagger'));
routes.use("/contacts", require("./contacts"))
  
// routes.get("/", (req, res) => {
//   res.send("Mark Brower")
// });

module.exports = routes;