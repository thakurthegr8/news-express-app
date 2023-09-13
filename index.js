require("dotenv").config();

const { default: axios } = require("axios");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
  );
  const data = await response.data;
  return res.status(200).render("index", { data });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
