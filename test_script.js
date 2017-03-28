const pg = require ("pg");
const settings = require("./settings"); //settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if(err) {
    return console.error("Connection error", err);
  }
  client.query("SELECT $1::int AS number", ["1"], (err, result) => {
    if(err) {
      return console.error("Error running query", err);
    }
   console.log(result.rows[0].number);
   client.end();
  });
});