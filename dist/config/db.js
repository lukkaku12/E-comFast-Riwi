"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const model_1 = require("../model");
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    models: [model_1.User, model_1.Role, model_1.Cart, model_1.Product, model_1.ProductCart, model_1.Entity, model_1.Order, model_1.Permissions]
});
exports.default = sequelize;
