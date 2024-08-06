"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInventory = void 0;
const tsyringe_1 = require("tsyringe");
const model_1 = require("../model");
let OrderInventory = class OrderInventory {
    async getAllOrders() {
        return await model_1.Order.findAll();
    }
    async addOrders(order) {
        return await model_1.Order.create(order);
    }
    async update(id, order) {
        return await model_1.Order.update(order, { where: { id } });
    }
    async delete(id) {
        return await model_1.Order.destroy({ where: { id } });
    }
    async getByUserId(id) {
        return await model_1.Order.findOne({ where: { UserId: id } });
    }
};
exports.OrderInventory = OrderInventory;
exports.OrderInventory = OrderInventory = __decorate([
    (0, tsyringe_1.injectable)()
], OrderInventory);
