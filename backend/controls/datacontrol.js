import User from "../models/dataModel.js";

const AddUser = async (req, res) => {
  try {
    console.log(req.body); // check incoming data

    const user = new User(req.body);
    await user.save(); // save to DB

    res.status(201).json({ message: "User added successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default AddUser;
