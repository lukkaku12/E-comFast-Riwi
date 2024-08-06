"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const tsyringe_1 = require("tsyringe");
const productService_1 = __importDefault(require("../service/productService"));
class productController {
    static async getAll(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const response = await productService.getAllProducts();
            res.status(200).json({
                status: 200,
                result: response,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async createProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const reponse = await productService.createProduct(req.body);
            res.status(201).json({
                status: 201,
                response: "product created successfully",
                extra: reponse,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async editProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const reponse = await productService.updateProduct(parseInt(req.params.id), req.body); //will expect quantity, name
            res.status(204).json({
                status: 204,
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
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const response = await productService.deleteProduct(parseInt(req.params.id));
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
exports.productController = productController;
