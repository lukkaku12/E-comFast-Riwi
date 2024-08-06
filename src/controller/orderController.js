"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const tsyringe_1 = require("tsyringe");
const orderService_1 = __importDefault(require("../service/orderService"));
class OrderController {
    static async getAll(_req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const response = await orderService.getAllOrders();
            res.status(200).json({
                status: 200,
                result: response,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async createOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const reponse = await orderService.createOrder(req.body);
            res.status(201).json({
                status: 201,
                response: "order created successfully",
                extra: reponse,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async editOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const reponse = await orderService.updateOrder(parseInt(req.params.id), req.body); //will expect quantity, name
            res.status(214).json({
                status: 214,
                response: "order transformed successfully",
                extra: reponse,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async delete(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const response = await orderService.deleteOrder(parseInt(req.params.id));
            res.status(204).json({
                status: 204,
                response: `${response} eliminated successfully`,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    ;
    static async getByUserId(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const response = await orderService.getByUserId(parseInt(req.params.id));
            res.status(200).json({
                status: 200,
                response: response
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.OrderController = OrderController;
