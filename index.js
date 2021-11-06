const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8088;

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    console.log("En la raiz del server");
    res.send(true);
});

let obj = {
    "mascotas":[{
        "nombre":"Dexter",
        "raza":"callejero",
        "edad":"3"
    }],
    "personas":[{
        "nombre":"Lionel",
        "apellido":"Messi",
        "edad":"34"
    }]
}

app.get("/api/:tipo", (req, res) =>{
    let {tipo} = req.params;
    let response = false;
    if(obj.hasOwnProperty(tipo)){
        response = obj[tipo]
    }
    res.json(response);
});

app.post("/api/:tipo", (req, res) =>{
    let {tipo} = req.params;
    let objAdd = req.body;
    let response = false;
    if(obj.hasOwnProperty(tipo)){
        response = obj[tipo].push(objAdd)
    }
    res.json(obj[tipo]);
});


app.listen(PORT,()=> console.log(`Servidor en el puerto ${PORT}`))