var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "ec2-54-209-177-70.compute-1.amazonaws.com",
  user: "css",
  password: "oPPtWFk9r2Ne1PTbHN1z"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});