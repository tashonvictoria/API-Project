import { Router } from "express";
import * as controllers from "../controllers/location.js";

const router = Router()

router.get("/", controllers.getLocation)
router.get("/:id", controllers.getLocation)
router.post("/:id", controllers.createLocation) 
router.put("/:id", controllers.updateLocation)
router.delete("/:id", controllers.deleteLocation)

export default router;