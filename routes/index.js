import { Router } from "express";
import locationRoutes from "./location.js";
import restaurantRoutes from "./restaurant.js";

const router = Router();

router.get("/", (req, res) => res.send("This the api root!"));

router.use("/locations", locationRoutes);
router.use("/restaurants", restaurantRoutes);

export default router;
