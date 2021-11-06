const express = require("express");
const app = express();
const cors = require("cors");
const serverRouter = require("./routes");
const path = require('path');

const PORT = 8088;

app.use("/files",express.static(path.join(__dirname, "uploads")));
app.use("/html",express.static(path.join(__dirname, "wiews")));
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) =>{
//     console.log("En la raiz del server");
//     res.send(true);
// });

serverRouter(app);

app.listen(PORT,()=> console.log(`Servidor en el puerto ${PORT}`));