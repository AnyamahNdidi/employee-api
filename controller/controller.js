const mongoose = require('mongoose')
const employee = require('../Models/EmpoyleeModels')

const postem = async (req, res) => {
  const empoloyeeData = new employee(req.body)

  try {
    await empoloyeeData.save()
    res.status(201).json(empoloyeeData)
  } catch (error) {
    res.status(409).json({ messsage: error.messsage })
  }

}

const getem = async (req, res) => {


  try {
    const getempoloyee = await employee.find()
    res.status(200).json(getempoloyee)

  } catch (error) {
    res.status(404).json({ message: error.message })
  }

}

const getSingle = async (req, res) => {
  const { id } = req.params
  try {
    const getbyId = await employee.findById(id)
    res.status(200).json({ getbyId })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const updateEm = async (req, res) => {
  const { id } = req.params
  const { fullName, email, address, dob, department, active } = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`this ${id} is invalid`)
  }
  const dataEm = { fullName, email, address, dob, department, active, _id: id }
  await employee.findByIdAndUpdate(id, dataEm, { new: true })
  res.json(employee)
}

const deleteEm = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`this ${id} is invalic`)
  }

  await employee.findByIdAndDelete(id)
  res.json({ message: "delete sucessfully" })


}


module.exports = {
  postem,
  getem,
  getSingle,
  updateEm,
  deleteEm
}