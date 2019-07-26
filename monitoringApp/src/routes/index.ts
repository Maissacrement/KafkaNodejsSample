// Externe Import Modules
import express = require("express");
const router: any = express.Router();

// Import Pages
import "./endpoints/Consumer";
import BadRequest from "./endpoints/badRequest";
import { createANewTopic, sendTopic } from "./endpoints/Producerv2";

router.get("/sendTopicv2", sendTopic);
router.get("/createTopicv2", createANewTopic);
router.get("/*", BadRequest);

export default router;
