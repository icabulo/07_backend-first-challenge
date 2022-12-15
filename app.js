var express = require("express");
var morgan = require("morgan");
var app = express();
app.use(morgan("dev"));

/* const result = {
  message: "Curso encontrado satisfactoriamente",
  top: {
    version_top: 26,
    students: 10,
    names: [
      "Felipe",
      "Laura",
      "Jailer",
      "Jaime",
      "Juan",
      "Andrés",
      "Nicolas",
      "Carlos",
      "Ivan",
      "Diana",
    ],
  },
}; */
const topStudentsV26 = {
  version_top: 26,
  students: 10,
  names: [
    "Felipe",
    "Laura",
    "Jailer",
    "Jaime",
    "Juan",
    "Andrés",
    "Nicolas",
    "Carlos",
    "Ivan",
    "Diana",
  ],
};

app.get("/my-first-endpoint", (req, res) => {
  //   res.send("<h1>Hola Mundo</h1>");
  res.status(200).json({
    message: "Curso encontrado satisfactoriamente",
    top: topStudentsV26,
  });
  //   res.status(200).json(result);
});

app.listen(8000, () => console.log("Listening on port 8000!"));
