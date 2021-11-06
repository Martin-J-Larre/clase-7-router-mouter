const express = require("express");
const app = express();
const cors = require("cors");
const serverRouter = require("./routes")

const PORT = 8088;

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    console.log("En la raiz del server");
    res.send(true);
});

serverRouter(app);






app.listen(PORT,()=> console.log(`Servidor en el puerto ${PORT}`))