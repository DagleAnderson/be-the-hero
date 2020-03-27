const express = require("express");
const crypto = require("crypto");

const ongController = require("./controller/OngController")
const incidentController = require("./controller/IncidentController");
const profileController = require("./controller/ProfileController");
const sessionController = require("./controller/SessionController");

const connection = require("./database/connection");

//Criaçã de Rota / Mapeamento
const routes = express.Router();

routes.post("/sessions",sessionController.create)

routes.get("/ongs",ongController.findAll);
routes.post("/ongs",ongController.create);

routes.get("/incidents",incidentController.findAll);
routes.post("/incidents",incidentController.create);
routes.delete("/incidents/:id",incidentController.delete);

routes.get("/profile",profileController.findById),
   
    module.exports = routes; //export variável de dentro de um arquivo
