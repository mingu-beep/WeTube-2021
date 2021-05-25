import express from "express";

const PORT = 4500;
const app = express();

const handleHome = (req, res) => {
  return res.send("I still love you💛💛");
};

app.get("/", handleHome);

const handleLogin = (req, res) => {
  return res.send("login here");
};
app.get("/login", handleLogin);
const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
