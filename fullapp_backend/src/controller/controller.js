const User = require("../module/module");
var bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
require("dotenv").config();
var jwt = require("jsonwebtoken");
exports.create = async (req, res) => {
  try {
      const users = await User.create(req.body);
      res.send({ message: "successfully account create", icon: "success",users});
      res.status(200).send(users);
    }
    catch (e) {
    console.log(e);
    res.status(400);
  }
};
exports.findAll = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.status(200).send(users);
  } catch (e) {
    res.status(400);
  }
};

exports.remove = async (req, res) => {
  debugger
  const _id = req.params.id;
  try {
    const users = await User.findByIdAndDelete({_id:_id});
    res.status(200).send(users);
  } catch (e) {
    res.status(400);
  }
};
exports.login = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.status(200).send(users);
    console.log(users);
  } catch (e) {
    res.status(400);
  }
};
exports.update = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.status(200).send(users);
  } catch (e) {
    res.status(400);
  }
};

exports.remove = async (req, res) => {
  const _id = req.params.id;
  try {
    const users = await User.findOneAndDelete(_id);
    res.status(200).send(users);
  } catch (e) {
    res.status(400);
  }
};
exports.replacement = async (req, res) => {
  const id = req.params.id;
  try {
    const data1 = {
      name:req.body.name,
      username:req.body.username,
      email:req.body.email,
      city:req.body.city,
      gender:req.body.gender,
      phone:req.body.phone,
      country:req.body.country
    };
   
    const data = await User.findByIdAndUpdate({ _id: id },data1,{new:true});
    console.log(data);
    res.status(200).send(data);
  } catch (e) {
    res.status(400);
  }
};
exports.findbyid = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await User.findOne({_id: id});
    res.status(200).send(users);
  } catch (e) {
    res.status(400);
  }
};