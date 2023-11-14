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
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.patch("/users/:id", deleteUser);
router.post("/users/login", login);
export default router;
