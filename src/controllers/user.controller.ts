import { Request, Response } from "express";
import { User } from "../interfaces";
import * as UserService from "../services/user.service";

const login = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const users = await UserService.loginService(user);
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const book_id: number = parseInt(req.params.id);
    const users = await UserService.getUserByIdService(book_id);
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const users = await UserService.createUserService(user);
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser: User = req.body;
    const bookId: any = req.params.id;
    const users = await UserService.updateUserService(updatedUser, bookId);
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const book_id: number = parseInt(req.params.id);
    const users = await UserService.deleteUserService(book_id);
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser, login };
