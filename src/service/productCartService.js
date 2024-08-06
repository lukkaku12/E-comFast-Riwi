"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productCartRepository_1 = require("../repository/productCartRepository");
let ProductCartService = class ProductCartService {
    constructor(productCartRepository) {
        this.productCartRepository = productCartRepository;
    }
    async getAllProductCarts() {
        const [rows] = await this.productCartRepository.getAllProductCarts();
        return rows;
    }
    async createProductCart(order) {
        const result = await this.productCartRepository.addProductCart(order);
        return result;
    }
    async deleteProductCart(id) {
        const result = await this.productCartRepository.delete(id);
        return result;
    }
    async updateProductCart(id, productCart) {
        return await this.productCartRepository.update(id, productCart);
    }
};
ProductCartService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(productCartRepository_1.ProductCartRepository)),
    __metadata("design:paramtypes", [productCartRepository_1.ProductCartRepository])
], ProductCartService);
exports.default = ProductCartService;
