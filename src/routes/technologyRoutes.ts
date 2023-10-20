import { Router } from "express";
import { checkExistsUserAccount } from "../middlewares/checkExistsUserAccount";
import { TechnologyController } from "../controllers/TechnologyController";

const technologyRoutes = Router();

technologyRoutes.use(checkExistsUserAccount);

technologyRoutes.post("/", TechnologyController.create);
technologyRoutes.get("/", TechnologyController.list);
technologyRoutes.put("/:id", TechnologyController.update);
technologyRoutes.patch("/:id/studied", TechnologyController.toggleStudiedStatus);
technologyRoutes.delete("/:id", TechnologyController.delete);

export { technologyRoutes };