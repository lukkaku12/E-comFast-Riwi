"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCartController = void 0;
const tsyringe_1 = require("tsyringe");
const productCartService_1 = __importDefault(require("../service/productCartService"));
class ProductCartController {
    static async createProductCart(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productCartService_1.default);
            const reponse = await productCartService.createProductCart(req.body);
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
    static async editProductCart(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productCartService_1.default);
            const reponse = await productCartService.updateProductCart(parseInt(req.params.id), req.body); //will expect quantity, name
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
            const productCartService = tsyringe_1.container.resolve(productCartService_1.default);
            const response = await productCartService.deleteProductCart(parseInt(req.params.id));
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
exports.ProductCartController = ProductCartController;
