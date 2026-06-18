import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

userSchema.methods.comparePassword = function (password) {
  return this.password === password;
};

export default mongoose.model('User', userSchema);
