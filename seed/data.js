import db from "../db/connection.js";
import Location from "../models/Location.js";
import Restaurant from "../models/Restaurant.js";
import locations from "./location.json" assert { type: "json" };
import restaurants from "./restaurant.json" assert { type: "json" };

const insertData = async () => {
  //reset database
  await db.dropDatabase();

  //insertData
  await Location.create(locations);
  await Restaurant.create(restaurants);

  //close db connection
  await db.close();
};

insertData();
