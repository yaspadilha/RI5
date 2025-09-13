"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor(empresa) {
        this.empresa = empresa;
    }
    Descritor.prototype.descrever = function () {
        var descricao = "Raz\u00E3o social: ".concat(this.empresa.razaoSocial, "\n");
        descricao += "Nome fantasia: ".concat(this.empresa.nomeFantasia, "\n");
        descricao += "CNPJ: ".concat(this.empresa.cnpj, "\n");
        descricao += "Endere\u00E7o\n";
        descricao += "Rua: ".concat(this.empresa.endereco.rua, " | Bairro: ").concat(this.empresa.endereco.bairro, " ");
        descricao += "| Cidade: ".concat(this.empresa.endereco.cidade, " | N\u00FAmero: ").concat(this.empresa.endereco.numero, "\n");
        descricao += "\nFuncion\u00E1rios:\n";
        this.empresa.funcionarios.forEach(function (funcionario) {
            descricao += "Nome: ".concat(funcionario.nome, "\n");
            descricao += "Matr\u00EDcula: ".concat(funcionario.matricula, "\n");
            descricao += "CPF: ".concat(funcionario.cpf, "\n");
            descricao += "Rua: ".concat(funcionario.endereco.rua, " | Bairro: ").concat(funcionario.endereco.bairro, " ");
            descricao += "| Cidade: ".concat(funcionario.endereco.cidade, " | N\u00FAmero: ").concat(funcionario.endereco.numero, "\n\n");
        });
        return descricao;
    };
    return Descritor;
}());
exports.default = Descritor;