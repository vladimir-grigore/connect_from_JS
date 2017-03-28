const args     = process.argv.slice(2);
const settings = require('./settings');
const knex     = require('knex')({
  client     : 'pg',
  connection : {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

// Insert a new person in the DB and return the newly created row
// The insert action returns the id od the newly inserted row
knex.insert([{first_name: args[0], last_name: args[1], birthdate: args[2]}], 'id')
  .into('famous_people')
  .asCallback(function(err, rows) {
    if(err){
      console.log("Error:", err);
    }
    knex.select('first_name', 'last_name', 'birthdate').from('famous_people')
      .where('id', '=', rows[0]).asCallback(function (err, rows) {
        if(err) {
          console.log("ERROR:", err);
        }
        console.log(rows[0]);
        process.exit();
      });
  });
