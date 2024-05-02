import mongoose from "mongoose";
import bcrypt from "bcryptjs"; //using it for comparing password
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.matchPassword = async function (
  entered_password_comming_from_usercontroller
) {
  return await bcrypt.compare(
    entered_password_comming_from_usercontroller,
    this.password
  );
};
userSchema.pre("save", async function (next) {
  //.if we dealing with some other things than password,then it moves on to next.
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
}); //dealing with password.. new user created .passowrd hatched .then saved to db
const User = mongoose.model("User", userSchema);
export default User;
