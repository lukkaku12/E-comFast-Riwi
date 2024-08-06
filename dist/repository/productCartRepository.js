"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCartRepository = void 0;
const tsyringe_1 = require("tsyringe");
const model_1 = require("../model");
let ProductCartRepository = class ProductCartRepository {
    async getAllProductCarts() {
        return await model_1.ProductCart.findAll();
    }
    async addProductCart(productCart) {
        return await model_1.ProductCart.create(productCart);
    }
    async update(id, productCart) {
        return await model_1.ProductCart.update(productCart, { where: { id } });
    }
    async delete(id) {
        return await model_1.ProductCart.destroy({ where: { id } });
    }
};
exports.ProductCartRepository = ProductCartRepository;
exports.ProductCartRepository = ProductCartRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductCartRepository);
