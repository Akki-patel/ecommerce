import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});
const user = mongoose.model.User || mongoose.model("User", UserSchema);
export default User;
