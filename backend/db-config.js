const knex = require("knex");
const config = require("../knexfile");
const testBase = require("../backend/test/testBase");

let db = null;

if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "test-backend") {
  console.log("TEST DB");
  db = knex(config.test);
  testBase.resetDatabase(db);
} else {
  console.log("DEV DB");
  db = knex(config.development);
}

// Add the missing columns to the student table
db.schema
  .hasTable("student")
  .then((exists) => {
    if (exists) {
      return db.schema.table("student", (table) => {
        // Add the missing columns "religion" and "homagama"
        table.string("religion");
        table.string("homagama");
      });
    }
  })
  .catch((error) => {
    console.error("Error adding columns to student table:", error);
  });

module.exports = db;
