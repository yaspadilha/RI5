"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var descritorEmpresa_1 = __importDefault(require("./descritorEmpresa"));
var empresa_1 = __importDefault(require("./empresa"));
var endereco_1 = __importDefault(require("./endereco"));
var funcionario_1 = __importDefault(require("./funcionario"));
var telefone_1 = __importDefault(require("./telefone"));
var funcionarios = [
    new funcionario_1.default("Tony Stark", "123", "111122223333", new endereco_1.default("Rua Ultron", 145, "Santa Monica", "Los Angeles"), new telefone_1.default("310", "5551234")),
    new funcionario_1.default("Pepper Potts", "456", "444455556666", new endereco_1.default("Rua Thanos", 777, "Venice Beach", "Los Angeles"), new telefone_1.default("310", "5555678")),
];
var telefone = [new telefone_1.default("212", "5557890")];
var empresa = new empresa_1.default("Tecnologia", "Indústrias Stark", "63521489653", new endereco_1.default("Rua Howard Stark", 100, "Upper East Side", "Nova York"), funcionarios, telefone);
var descritor = new descritorEmpresa_1.default(empresa);
console.log(descritor.descrever());