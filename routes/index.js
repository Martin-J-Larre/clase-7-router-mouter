const { Router} = require("express");
const router = Router();


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

function serverRouter(app) {
    app.use("/jugadores", router);

    router.get("/api/:tipo", (req, res) =>{
        let {tipo} = req.params;
        let response = false;
        if(obj.hasOwnProperty(tipo)){
            response = obj[tipo]
        }
        res.json(response);
    });
    
    router.post("/api/:tipo", (req, res) =>{
        let {tipo} = req.params;
        let objAdd = req.body;
        let response = false;
        if(obj.hasOwnProperty(tipo)){
            response = obj[tipo].push(objAdd)
        }
        res.json(obj[tipo]);
    });
}



module.exports = serverRouter;