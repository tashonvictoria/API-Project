import { Router } from "express";

import locationRoutes from "./location.js";
import restaurantRoutes from "./restaurant.js";

const router = Router();

router.get("/", (req, res) => res.send("This the api root!"));

router.use("/location", locationRoutes);
router.use("/restaurant", restaurantRoutes);

export default router;
