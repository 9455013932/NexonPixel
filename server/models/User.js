import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String},
    email: { type: String,  unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    address: [
      {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        zipcode: { type: String },
      },
    ],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // Order history
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);




// import mongoose from 'mongoose';

// // Define User schema
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role:{type:String,emum:['admin','user'],default:'user'}
// }, {
//   timestamps: true, 
// });

// // Create and export User model
// const User = mongoose.model('User', userSchema);
// export default User;
