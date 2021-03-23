const Forms = require("../model/userForm.model");

module.exports.create =(form) =>{
    return Forms.create(form)
}