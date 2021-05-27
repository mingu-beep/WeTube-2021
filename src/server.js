import express from "express";

const PORT = 4500;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  return res.send("I still love you💛💛");
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger, privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}🚀`);
app.listen(PORT, handleListening);
