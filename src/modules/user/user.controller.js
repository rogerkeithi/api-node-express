import express from "express";
import listUsers from "./useCases/listUsers.js";
import updateUser from "./useCases/updateUser.js";
import deleteUser from "./useCases/deleteUser.js";
import createUser from "./useCases/createUser.js";

const userController = express.Router();

userController.post('/', createUser)

userController.delete('/', deleteUser)

userController.put('/', updateUser)

userController.get('/', listUsers)

export default userController;
