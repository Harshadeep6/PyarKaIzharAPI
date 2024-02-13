// const cl = console.log.bind();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToDB from "./db/connectToDB.js";
import Text from "./db/texts.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get("/test", (req, res) => {
  res.send("Its working!")
});

app.get("/getTexts", async (req, res) => {
  const texts = await Text.find();
  res.status(200).json(texts);
});

app.get("/clearData", async (req, res) => {
  const result = await Text.deleteMany({});
  console.log(`${result.deletedCount} entries deleted successfully.`);
  res.status(200).json("");
});

app.post("/send", async (req, res) => {
  if (req.body.text !== "") {
    const text = await Text.create(req.body);
    await text.save();
    res.status(200).json("");
  } else res.status(200).json("");
});

export default app
