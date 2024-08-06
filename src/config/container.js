"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productRepository_1 = require("../repository/productRepository");
const productService_1 = __importDefault(require("../service/productService"));
tsyringe_1.container.registerSingleton(productRepository_1.ProductInventory);
tsyringe_1.container.registerSingleton(productService_1.default);
