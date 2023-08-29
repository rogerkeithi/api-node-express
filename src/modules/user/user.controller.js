import express from "express";
import createUser from "./useCases/createUser/createUser.js";
import deleteUser from "./useCases/deleteUser/deleteUser.js";
import updateUser from "./useCases/updateUser/updateUser.js";
import listAllUsers from "./useCases/listAllUsers/listAllUsers.js";
import getUser from "./useCases/getUser/getUser.js";

const userController = express.Router();

userController.post('/', createUser)

userController.delete('/', deleteUser)

userController.put('/', updateUser)

userController.get('/', listAllUsers)

userController.get('/byId', getUser)

export default userController;
