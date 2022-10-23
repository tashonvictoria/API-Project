import db from "../db/connection.js";
import Location from "../models/Location.js";
import Restaurant from "../models/Restaurant.js";

import location from "./location.json" assert {type: "json"};

import restaurant from "./restaurant.json" assert {type: "json"};

const insertData = async () => {
  //reset database
  await db.dropDatabase();

  //insertData
  await Location.create(location);
  await Restaurant.create(restaurant);

  //close db connection
  await db.close();
};

insertData();