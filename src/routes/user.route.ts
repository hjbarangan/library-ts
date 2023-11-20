import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login
} from "../controllers/user.controller";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to category
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     tags:
 *       - Users
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

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.patch("/users/:id", deleteUser);
router.post("/users/login", login);
export default router;
