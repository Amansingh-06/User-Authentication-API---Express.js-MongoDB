const User = require("../models/User");

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({
            message: "User Detail",
            Id: user._id,
            fullName: user.fullname,
            email: user.email,
            gender: user.gender,
            DOB: user.DOB,
            country:user.country
        }
        )
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            err
        })
    }
}
module.exports = getUserByEmail;