"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
app_1.default.use(helmet_1.default()); // set well-known security-related HTTP headers
app_1.default.use(compression_1.default());
app_1.default.disable("x-powered-by");
var server = app_1.default.listen(3000, function () {
    return console.log("Starting ExpressJS server on Port 3000");
});
exports.default = server;
