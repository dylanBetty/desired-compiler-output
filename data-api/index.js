const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let personData = {
  1: { id: "1", name: "Dylan" },
  2: { id: "2", name: "Ewout" },
};

app.get("/people/:id", (req, res) => {
  const id = req.params.id;
  res.json(personData[id]);
});

app.post("/people/:id", (req, res) => {
  const newName = req.body.name;
  const id = req.params.id;

  personData[id] = { ...personData[id], name: newName };
  res.json(personData[id]);
});

app.listen(4000, console.log(`Server running on :4000`));
