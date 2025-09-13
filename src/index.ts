import Descritor from "./descritorEmpresa";
import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

let funcionarios: Funcionario[] = [
  new Funcionario( "Tony Stark", "123", "111122223333", new Endereco("Rua Ultron", 145, "Santa Monica", "Los Angeles"), new Telefone("310", "5551234")),
  new Funcionario("Pepper Potts", "456", "444455556666", new Endereco("Rua Thanos", 777, "Venice Beach", "Los Angeles"), new Telefone("310", "5555678")),
];

let telefone: Telefone[] = [new Telefone("212", "5557890")];
let empresa = new Empresa("Tecnologia", "Indústrias Stark", "63521489653", new Endereco("Rua Howard Stark", 100, "Upper East Side", "Nova York"), funcionarios, telefone
  );
  
let descritor = new Descritor(empresa);
  console.log(descritor.descrever());
  