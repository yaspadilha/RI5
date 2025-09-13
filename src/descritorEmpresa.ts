import Empresa from "./empresa"

export default class Descritor {
    public empresa: Empresa

    constructor(empresa: Empresa){
        this.empresa = empresa
    }

    public descrever(): string {
        let descricao = `Razão social: ${this.empresa.razaoSocial}\n`
        descricao += `Nome fantasia: ${this.empresa.nomeFantasia}\n`
        descricao += `CNPJ: ${this.empresa.cnpj}\n`
        descricao += `Endereço\n`
        descricao += `Rua: ${this.empresa.endereco.rua} | Bairro: ${this.empresa.endereco.bairro} `
        descricao += `| Cidade: ${this.empresa.endereco.cidade} | Número: ${this.empresa.endereco.numero}\n`
        descricao += `\nFuncionários:\n`

        this.empresa.funcionarios.forEach(funcionario => {
            descricao += `Nome: ${funcionario.nome}\n`
            descricao += `Matrícula: ${funcionario.matricula}\n`
            descricao += `CPF: ${funcionario.cpf}\n`
            descricao += `Rua: ${funcionario.endereco.rua} | Bairro: ${funcionario.endereco.bairro} `
            descricao += `| Cidade: ${funcionario.endereco.cidade} | Número: ${funcionario.endereco.numero}\n\n`
        });

        return descricao;
    }
}