const mongoose = require("mongoose");
const db = mongoose.connection;

module.exports = {
  Connect: () => {
    return new Promise((resolve, reject) => {
      try {
        //db connect
        mongoose.connect("mongodb://localhost/dashboard", {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        });
        db.on("error", (err) => {
          //console.error.bind(console, "connection error:");
          reject(err.message);
        });
        db.once("open", function () {
          resolve(db);
        });
      } catch (error) {
        reject(error.message);
      }
    });
  },
};
