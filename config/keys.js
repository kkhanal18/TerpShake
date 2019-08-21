module.exports = {
  mongoURI:
    process.env.MONGODB_URI ||
    "mongodb+srv://kaushal123:kaushal123@devconnector-fka9p.mongodb.net/test?retryWrites=true&w=majority",
  jwtSecret: "mysecrettoken"
};
