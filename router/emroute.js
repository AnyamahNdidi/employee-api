const express = require('express')
const route = express.Router()
const { postem, getem, getSingle, updateEm, deleteEm } = require('../controller/controller')


route.post("/postt", postem)
route.get('/', getem)
route.get("/:id", getSingle)
route.patch("/:id", updateEm)
route.delete("/:id", deleteEm)

module.exports = route