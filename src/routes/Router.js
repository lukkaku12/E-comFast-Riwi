"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const orderRouter_1 = __importDefault(require("./orderRouter"));
const productCartRouter_1 = __importDefault(require("./productCartRouter"));
const router = (0, express_1.Router)();
router.use('/product', productRouter_1.default);
router.use('/user', userRouter_1.default);
router.use('/order', orderRouter_1.default);
router.use('/product-cart', productCartRouter_1.default);
exports.default = router;
