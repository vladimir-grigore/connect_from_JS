const arg = process.argv[2];
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
  client.query("SELECT * FROM famous_people WHERE last_name = $1", [arg], (err, result) => {
    if(err) {
      return console.error("Error running query", err);
    }
   console.log(result.rows[0]);
   client.end();
  });
});