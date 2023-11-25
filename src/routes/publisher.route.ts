import { Router } from "express";
import { getAllPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher } from "../controllers/publisher.controller";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Publishers
 *   description: Operations related to publishers
 */

/**
 * @swagger
 * /api/publishers:
 *   get:
 *     summary: Get all publishers
 *     description: Retrieve a list of all publishers.
 *     tags:
 *       - Publishers
 *     responses:
 *       400:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal server error
 *               error: [error details]
 */
router.get("/publishers", getAllPublishers);
router.get("/publishers/:id", getPublisherById);
router.post("/publishers", createPublisher);
router.put("/publishers/:id", updatePublisher);
router.delete("/publishers/:id", deletePublisher);

export default router;
