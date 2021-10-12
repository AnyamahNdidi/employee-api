const mongoose = require('mongoose')

const employeeShema = mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  dob: {
    type: Date,
    require: true
  },
  department: {
    type: String,
    require: true
  },
  active: {
    type: Boolean,
    require: true
  }

})

const employee = mongoose.model("employee", employeeShema)

module.exports = employee