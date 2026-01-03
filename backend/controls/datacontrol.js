import User from "../models/dataModel.js";

const AddUser = async (req, res) => {
  try {

    console.log(req.body);
    const user = new User(req.body);
    await user.save(); 

    res.status(201).json({ message: "User added successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default AddUser;
