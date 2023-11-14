import { Request, Response } from "express";
import { User } from "../interfaces/interface";
import * as UserService from "../data-access/user.query";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const books = await UserService.getAllUsers();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting books:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const book_id: number = parseInt(req.params.id);
    const books = await UserService.getUserById(book_id);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const books = await UserService.createUser(user);
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
    const books = await UserService.updateUser(updatedUser, bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const book_id: number = parseInt(req.params.id);
    const books = await UserService.deleteUser(book_id);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
