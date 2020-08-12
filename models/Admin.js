const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Admin", AdminSchema);
