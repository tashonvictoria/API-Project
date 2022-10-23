import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Restaurant = new Schema({
  _id: { type: String },
  name: { type: String },
  website: { type: String },
  location: { type: [{ type: String }] },
  rating: { type: String },
  description: { type: String },
  dresscode: { type: Boolean },
  PriceRange: { type: String },
  cuisineType: { type: String },
  dresscodeAttire: { type: String },
  happyHour: { type: Boolean },
  liveMusic: { type: Boolean }

});

export default mongoose.model("restaurants", Restaurant);