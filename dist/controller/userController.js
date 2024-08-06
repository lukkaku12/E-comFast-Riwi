"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const tsyringe_1 = require("tsyringe");
const userService_1 = __importDefault(require("../service/userService"));
class userController {
    static async getAll(_req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const response = await userService.getAllUsers();
            res.status(200).json({
                status: 200,
                result: response
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async createUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const reponse = await userService.createUser(req.body);
            res.status(201).json({
                status: 201,
                response: "user created successfully",
                extra: reponse,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async editUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const reponse = await userService.updateUser(parseInt(req.params.id), req.body); //will expect quantity, name
            res.status(214).json({
                status: 214,
                response: "product transformed successfully",
                extra: reponse,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async delete(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const response = await userService.deleteUser(parseInt(req.params.id));
            res.status(204).json({
                status: 204,
                response: `${response} eliminated successfully`,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.userController = userController;
