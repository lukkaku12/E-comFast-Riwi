"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controller/productController");
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.productController.getAll);
productRouter.post('/', productController_1.productController.createProduct);
productRouter.put('/:id', productController_1.productController.editProduct);
productRouter.delete('/:id', productController_1.productController.delete);
//funciona
exports.default = productRouter;
