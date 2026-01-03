import User from "../models/dataModel.js";


export const FindUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const UpdateUser = async (req, res) => {

    try {
        
        const { _id, ...updateData } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );
        res.status(200).json(updatedUser)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
