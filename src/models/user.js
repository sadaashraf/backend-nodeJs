import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

userSchema.methods.comparePassword = function (password) {
  return this.password === password;
};

export default mongoose.model('User', userSchema);
