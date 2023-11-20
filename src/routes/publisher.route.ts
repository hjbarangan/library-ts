import { Router } from "express";
import { getAllPublishersService, getPublisherByIdService, createPublisherService, updatePublisherService, deletePublisherService } from "../services/publisher.service";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Operations related to category
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Get all category
 *     description: Retrieve a list of all category.
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Books retrieved successfully
 *               data: [book1, book2]
 *       400:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal server error
 *               error: [error details]
 */
router.get("/categories", getAllPublishersService);
router.get("/categories/:id", getPublisherByIdService);
router.post("/categories", createPublisherService);
router.patch("/categories/:id", updatePublisherService);
router.patch("/categories/:id", deletePublisherService);

export default router;
