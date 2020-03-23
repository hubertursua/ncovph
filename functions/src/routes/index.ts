import { Router } from "express";
import * as root from "./root";
import * as health from "./health";
import * as rateLimit from "./rateLimit";
import * as confirmedCases from "./confirmedCases";
import * as countries from "./countries";
import * as regions from "./regions";
import * as provinces from "./provinces";
import * as cities from "./cities";

const router = Router();

router.use(rateLimit.handler);
router.use(health.path, health.handler);

router.get(root.path, root.handler);

router.get(countries.path, countries.handler);
router.get(regions.path, regions.handler);
router.get(provinces.path, provinces.handler);
router.get(cities.path, cities.handler);

router.get(confirmedCases.path, confirmedCases.handler);

export default router;
