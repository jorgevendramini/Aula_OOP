// Exercício 1:
// Crie uma classe chamada "Animal" com os atributos "nome" e "idade". 
// Em seguida, crie uma classe derivada chamada "Cachorro" que herda da classe "Animal" e adiciona um atributo adicional chamado "raca". 
// Implemente métodos getter e setter para todos os atributos.

class Animal {
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    get nome(){
        return this._nome;
    }

    get idade(){
        return this._idade;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    set idade(novaIdade){
        novaIdade > 0 ? this._idade = novaIdade : console.log("A nova idade deve ser acima de zero.");
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca){
        super(nome, idade);
        this._raca = raca;
    }

    get raca(){
        return this._raca;
    }

    set raca(novaRaca){
        this._raca = novaRaca;
    }
}

let animal = new Animal("Max", 5);
console.log(animal.nome); // Saída: "Max"
console.log(animal.idade); // Saída: 5

animal.nome = "Bella";
animal.idade = 3;
console.log(animal.nome); // Saída: "Bella"
console.log(animal.idade); // Saída: 3

let cachorro = new Cachorro("Rex", 7, "Labrador");
console.log(cachorro.nome); // Saída: "Rex"
console.log(cachorro.idade); // Saída: 7
console.log(cachorro.raca); // Saída: "Labrador"

cachorro.nome = "Luna";
cachorro.idade = 4;
cachorro.raca = "Bulldog";
console.log(cachorro.nome); // Saída: "Luna"
console.log(cachorro.idade); // Saída: 4
console.log(cachorro.raca); // Saída: "Bulldog"


// Exercício 2:
// Crie uma classe chamada "Shape" (Forma) com um atributo "cor" e um método chamado "calcularArea". 
// Em seguida, crie duas classes derivadas chamadas "Circle" (Círculo) e "Rectangle" (Retângulo) que herdam da classe "Shape". 
// Implemente o método "calcularArea" em cada classe derivada para calcular a área do círculo e do retângulo, respectivamente.

class Shape {
    constructor(cor){
        this._cor = cor;
    }

    get cor(){
        return this._cor;
    }

    set cor(novaCor){
        this._cor = novaCor;
    }

    calcularArea(){
        //código aqui
    }
}

class Circle extends Shape {
    calcularArea(raio){
        const pi = 3.1415;
        return pi * Math.pow(raio, 2);
    }
}

class Rectangle extends Shape{
    calcularArea(base, altura){
        return base * altura;
    }
}

let shape = new Shape("vermelho");
console.log(shape.cor); // Saída: "vermelho"

let circle = new Circle("azul");
let areaCirculo = circle.calcularArea(5);
console.log(areaCirculo); // Saída: 78.5375

let rectangle = new Rectangle("verde");
let areaRetangulo = rectangle.calcularArea(4, 6);
console.log(areaRetangulo); // Saída: 24


// Exercício 3:
// Crie uma classe chamada "Pessoa" com os atributos "nome" e "idade". 
// Em seguida, crie duas classes derivadas chamadas "Estudante" e "Professor" que herdam da classe "Pessoa". 
// A classe "Estudante" deve ter um atributo adicional chamado "curso", enquanto a classe "Professor" deve ter um atributo adicional chamado "disciplina". 
// Implemente métodos getter e setter para todos os atributos.

class Pessoa {
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    get nome(){
        return this._nome;
    }

    get idade(){
        return this._idade;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    set idade(novaIdade){
        this._idade = novaIdade;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso){
        super(nome, idade);
        this._curso = curso;
    }

    get curso(){
        return this._curso;
    }

    set curso(novoCurso){
        this._curso = novoCurso;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina){
        super(nome, idade);
        this._disciplina = disciplina;
    }

    get disciplina(){
        return this._disciplina;
    }

    set disciplina(novaDisciplina){
        this._disciplina = novaDisciplina;
    }
}

let estudante = new Estudante("João", 20, "Engenharia");
console.log(estudante.nome); // Saída: "João"
console.log(estudante.idade); // Saída: 20
console.log(estudante.curso); // Saída: "Engenharia"

estudante.nome = "Maria";
estudante.idade = 22;
estudante.curso = "Medicina";
console.log(estudante.nome); // Saída: "Maria"
console.log(estudante.idade); // Saída: 22
console.log(estudante.curso); // Saída: "Medicina"

let professor = new Professor("Carlos", 35, "Matemática");
console.log(professor.nome); // Saída: "Carlos"
console.log(professor.idade); // Saída: 35
console.log(professor.disciplina); // Saída: "Matemática"

professor.nome = "Ana";
professor.idade = 40;
professor.disciplina = "Física";
console.log(professor.nome); // Saída: "Ana"
console.log(professor.idade); // Saída: 40
console.log(professor.disciplina); // Saída: "Física"


// Exercício 4:
// Crie uma classe chamada "ContaBancaria" com os atributos "titular" e "saldo". 
// Em seguida, crie duas classes derivadas chamadas "ContaCorrente" e "ContaPoupanca" que herdam da classe "ContaBancaria". 
// A classe "ContaCorrente" deve ter um atributo adicional chamado "limiteChequeEspecial", enquanto a classe "ContaPoupanca" não possui atributos adicionais. 
// Implemente métodos getter e setter para todos os atributos.

class ContaBancaria{
    constructor(titular, saldo){
        this._titular = titular;
        this._saldo = saldo;
    }

    get titular(){
        return this._titular;
    }

    get saldo(){
        return this._saldo;
    }

    set titular(novoTitular){
        this._titular = novoTitular;
    }
    
    set saldo(novoSaldo){
        this._saldo = novoSaldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(titular, saldo, limiteChequeEspecial){
        super(titular, saldo);
        this._limiteChequeEspecial = limiteChequeEspecial;
    }

    get limiteChequeEspecial(){
        return this._limiteChequeEspecial;
    }

    set limiteChequeEspecial(novoLimiteChequeEspecial){
        this._limiteChequeEspecial = novoLimiteChequeEspecial;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(titular, saldo){
        super(titular, saldo);
    }
}

let contaCorrente = new ContaCorrente("João", 1000, 500);
console.log(contaCorrente.titular); // Saída: "João"
console.log(contaCorrente.saldo); // Saída: 1000
console.log(contaCorrente.limiteChequeEspecial); // Saída: 500

contaCorrente.titular = "Maria";
contaCorrente.saldo = 1500;
contaCorrente.limiteChequeEspecial = 1000;
console.log(contaCorrente.titular); // Saída: "Maria"
console.log(contaCorrente.saldo); // Saída: 1500
console.log(contaCorrente.limiteChequeEspecial); // Saída: 1000

let contaPoupanca = new ContaPoupanca("Carlos", 2000);
console.log(contaPoupanca.titular); // Saída: "Carlos"
console.log(contaPoupanca.saldo); // Saída: 2000

contaPoupanca.titular = "Ana";
contaPoupanca.saldo = 3000;
console.log(contaPoupanca.titular); // Saída: "Ana"
console.log(contaPoupanca.saldo); // Saída: 3000


// Exercício 5:
// Crie uma classe chamada "Veiculo" com os atributos "marca" e "ano". 
// Em seguida, crie duas classes derivadas chamadas "Carro" e "Moto" que herdam da classe "Veiculo". 
// A classe "Carro" deve ter um atributo adicional chamado "modelo", enquanto a classe "Moto" deve ter um atributo adicional chamado "cilindrada". 
// Implemente métodos getter e setter para todos os atributos.

class Veiculo{
    constructor(marca, ano){
        this._marca = marca;
        this._ano = ano;
    }

    get marca(){
        return this._marca;
    }

    get ano(){
        return this._ano;
    }

    set marca(novaMarca){
        this._marca = novaMarca;
    }

    set ano(novoAno){
        this._ano = novoAno;
    }
}

class Carro extends Veiculo{
    constructor(marca, ano, modelo){
        super(marca, ano);
        this._modelo = modelo;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(novoModelo){
        this._modelo = novoModelo;
    }
}

class Moto extends Veiculo{
    constructor(marca, ano, cilindrada){
        super(marca, ano);
        this._cilindrada = cilindrada;
    }

    get cilindrada(){
        return this._cilindrada;
    }

    set cilindrada(novaCilindrada){
        this._cilindrada = novaCilindrada;
    }
}

let carro = new Carro("Toyota", 2022, "Corolla");
console.log(carro.marca); // Saída: "Toyota"
console.log(carro.ano); // Saída: 2022
console.log(carro.modelo); // Saída: "Corolla"

carro.marca = "Honda";
carro.ano = 2023;
carro.modelo = "Civic";
console.log(carro.marca); // Saída: "Honda"
console.log(carro.ano); // Saída: 2023
console.log(carro.modelo); // Saída: "Civic"

let moto = new Moto("Yamaha", 2021, 250);
console.log(moto.marca); // Saída: "Yamaha"
console.log(moto.ano); // Saída: 2021
console.log(moto.cilindrada); // Saída: 250

moto.marca = "Honda";
moto.ano = 2022;
moto.cilindrada = 150;
console.log(moto.marca); // Saída: "Honda"
console.log(moto.ano); // Saída: 2022
console.log(moto.cilindrada); // Saída: 150
