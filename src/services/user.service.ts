import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  findUserByUsername,
  deleteUser,
} from "../data-access/user.query";
import { User } from "../interfaces/interface";
import { comparePassword, generateJwt } from "../utils";

const getAllUsersService = async () => {
  try {
    const users = await getAllUsers();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const getUserByIdService = async (id: number) => {
  try {
    const user = await getUserById(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUserService = async (user: User) => {
  try {
    const newUser = await createUser(user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};
const updateUserService = async (user: User, id: number) => {
  try {
    const updatedUser = await updateUser(user, id);
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};

const deleteUserService = async (id: number) => {
  try {
    const deletedUser = await deleteUser(id);
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
};

const loginService = async (user: any) => {
  try {
    const { username, password } = user;
    const userExists: any = await findUserByUsername(username);
    let token;
    if (!userExists || userExists.length === 0) {
      throw new Error("User does not exist");
    }
    const validPass: any = await comparePassword(
      password,
      userExists[0].password
    );

    if (validPass) {
      token = generateJwt(userExists[0].user_id);
    } else {
      throw new Error("Incorrect Password!");
    }

    return token;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
  loginService,
};
