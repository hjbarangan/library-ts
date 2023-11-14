import { Request, Response } from "express";
import { User } from "../interfaces/interface";
import * as UserService from "../services/user.service";

const login = async (req: Request, res: Response) => {
  try {
    const username: string = req.params.username;
    const user = await UserService.loginService(username);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const books = await UserService.getAllUsersService();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting books:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const book_id: number = parseInt(req.params.id);
    const books = await UserService.getUserByIdService(book_id);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const books = await UserService.createUserService(user);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser: User = req.body;
    const bookId: any = req.params.id;
    const books = await UserService.updateUserService(updatedUser, bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const book_id: number = parseInt(req.params.id);
    const books = await UserService.deleteUserService(book_id);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
};
