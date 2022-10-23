import mongoose from "mongoose";
const Schema = mongoose.Schema;


let Location = new Schema({
  _id: { type: String },
  name: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  hours: { type: {} },
  brunch: { type: String },
  happyHourTime: { type: {} },
  reservation: { type: Boolean },
  email: { type: String },
  phoneNumber: { type: Number },
  afterHours: { type: Boolean },
  chef: { type: String },
  currency: { type: [{ type: String }] },
  language: { type: [{ type: String }] },
  international: { type: Boolean },
  restaurantID: {type: String}
})


export default mongoose.model("locations", Location);