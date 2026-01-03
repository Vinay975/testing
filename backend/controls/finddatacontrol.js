import User from "../models/dataModel.js";

const GetData = async (req, res) => {
  try {
    const data = await User.find().lean(); 
    res.status(200).json(data);            
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export default GetData;
