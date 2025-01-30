var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "ec2-3-219-93-177.compute-1.amazonaws.com",
  user:  "redhawks_css",
  password: "oPPtWFk9r2Ne1PTbHN1z!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});