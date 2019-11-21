require("dotenv").config();

let mongoUrl = process.env.MONGODB_URI;

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}


let PORT = process.env.PORT;

module.exports = {
  mongoUrl,
  PORT
};
