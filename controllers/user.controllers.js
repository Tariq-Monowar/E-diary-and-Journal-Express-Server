const User = require('../models/user.models')
const config = require('../config/config')

const getAllUser = async(req,res)=>{
    try {
        const allUser = await User.find()
        res.status(200).json(allUser)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getOneUser = async(req,res)=>{
    try {
        const allUser = await User.findById({_id: req.params.id})
        res.status(200).json(allUser)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const createUser = async(req,res)=>{
    try {
      const { title, desc, userName } = req.body;
      // Use the 'upload' middleware to parse the file from the request
  
      if(!title || !desc || !userName ){
        return res.status(404).json({
          message: 'Full All input filelds'
        });
      }
  
      const newUse = new User({
        title,
        desc,
        userName,
      // Store the file contents as a buffer in the image field
      });
      await newUse.save();
      res.status(201).json(newUse);
    } catch (error) {
      res.status(500).json(error.message);
    }   
  };

//綖

const updateUser = async(req, res) => {
  try {
    const { title, desc, userName } = req.body;
    const update = await User.findById({_id: req.params.id});
    update.title = title;
    update.desc = desc;
    update.userName = userName;
    await update.save()
    res.status(201).json(update);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


const deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete({_id: req.params.id})
        res.status(202).json({
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const getKey =(req,res)=>{
  const key = config.key
  res.status(200).json(key)
}


module.exports = { getAllUser, createUser, getOneUser, deleteUser, updateUser, getKey }