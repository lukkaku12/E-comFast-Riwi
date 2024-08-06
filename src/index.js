"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./routes/Router"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', Router_1.default);
const runServer = async () => {
    try {
        db_1.default.authenticate();
        console.log('database connected');
        db_1.default.sync();
        app.listen(3000, () => {
            console.log('listening on port http://localhost:3000');
        });
    }
    catch (error) {
        throw new Error(error);
    }
};
runServer();
