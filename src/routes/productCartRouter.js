"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productCartController_1 = require("../controller/productCartController");
const productCartRouter = (0, express_1.Router)();
productCartRouter.post('/', productCartController_1.ProductCartController.createProductCart);
productCartRouter.delete('/:id', productCartController_1.ProductCartController.delete);
productCartRouter.put('/:id', productCartController_1.ProductCartController.editProductCart);
//funcionan
exports.default = productCartRouter;
