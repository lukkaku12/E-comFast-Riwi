"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controller/orderController");
const orderRouter = (0, express_1.Router)();
orderRouter.get('/', orderController_1.OrderController.getAll);
orderRouter.post('/', orderController_1.OrderController.createOrder);
orderRouter.put('/:id', orderController_1.OrderController.editOrder);
orderRouter.delete('/:id', orderController_1.OrderController.delete);
orderRouter.get('/:id/user', orderController_1.OrderController.getByUserId);
//todas funcionan
exports.default = orderRouter;
