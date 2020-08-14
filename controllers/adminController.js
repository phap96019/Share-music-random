const Admin = require("../models/Admin");
const bodyParser = require("body-parser");
const formidable = require("formidable");
const fs = require("fs");
var path = require("path");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../middleware/validation");
module.exports.index = async (req, res) => {
  res.render("loginForm");
};
//register
module.exports.register = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const validation = registerValidation(fields);
    if (!validation.error || validation.error == null) {
      //check email & email is exist?
      const emailExist = await Admin.findOne({ email: fields.email });
      if (emailExist) return res.status(400).send("email already exist");
      const userExist = await Admin.findOne({ email: fields.email });
      if (userExist) return res.status(400).send("email already exist");
      //save new user
      const salt = await bcrypt.genSaltSync(10);
      const hashPassword = await bcrypt.hash(fields.password, salt);
      const newAdmin = new Admin({
        email: fields.email,
        password: hashPassword,
      });
      try {
        console.log(newAdmin);
        const saveUser = await newAdmin.save();
        res.send(saveUser);
      } catch (err) {
        res.json({ message: err });
      }
    } else {
      res.status(400).send(validation.error.details[0].message);
    }
  });
};

module.exports.login = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const emailExist = await Admin.findOne({ email: fields.email });
    if (!emailExist) return res.status(400).send("email doesn't exist");
    else {
      const hash = emailExist.password;
      if (bcrypt.compareSync(fields.password, hash)) {
        res.cookie("userID", emailExist._id);
        res.send("Login ok");
        //res.redirect("/products/get");
      } else {
        res.send("NO!");
      }
    }
  });
};

module.exports.getListLink = async (req, res) => {
  res.send("Link List");
};
