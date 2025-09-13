export default class Endereco{
    public numero: number
    public rua: string
    public bairro: string
    public cidade: string

    constructor(rua: string, numero:number, bairro: string, cidade: string){
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
    }

}