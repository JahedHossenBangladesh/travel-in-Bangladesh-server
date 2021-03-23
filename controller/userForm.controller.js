const formService = require("../Services/userForm.service");

module.exports.create = async (req,res,next) =>{
    try {
        const form = await formService.create(req.body);
        return res.status(200).json(form);
    }
    catch (e){
 console.error(e);
 return res.status(500).json({ message: "Somethings went wrong" });
    }
}