const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const allImages = asyncHandler(async(req,res) => {
    const allImg = await User.find();
    res.status(200).json(allImg)
});

const searchImages = asyncHandler(async(req,res) =>{
    const searchImag = await User.find({name:req.params.tag});
    res.status(200).json(searchImag);
});

module.exports = { allImages,searchImages };