import { Router } from "express";
import * as controllers from "../controllers/restaurant.js";

const router = Router()

router.get("/", controllers.getRestaurant)
router.get("/:id", controllers.getRestaurant)
router.post("/:id", controllers.createRestaurant) 
router.put("/:id", controllers.updateRestaurant)
router.delete("/:id", controllers.deleteRestaurant)

export default router;