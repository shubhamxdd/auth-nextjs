import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter a Username!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter an Email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter a Password!"],
  },
  isverified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
