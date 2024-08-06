"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.get('/', userController_1.userController.getAll);
userRouter.post('/', userController_1.userController.createUser);
userRouter.put('/:id', userController_1.userController.editUser);
userRouter.delete('/:id', userController_1.userController.delete);
//funciona
exports.default = userRouter;
