/*Exercício 1: Criando uma classe básica
Crie uma classe chamada Pessoa que tenha as propriedades nome e idade, 
e um método chamado apresentar que exiba no console uma mensagem com o nome e a idade da pessoa.*/




class Pessoa{
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    apresentar(){
        console.log(`Meu nome é ${this._nome} e eu tenho ${this._idade} anos.` )
    }
}

const pessoa1 = new Pessoa("Jorge", 18);
pessoa1.apresentar();





/*Exercício 2: Herança
Crie uma classe chamada Aluno que herde da classe Pessoa do exercício anterior. 
Adicione uma nova propriedade chamada matricula à classe Aluno e sobrescreva o método apresentar para exibir também a matrícula do aluno.*/

class Aluno extends Pessoa{
    constructor(nome, idade, matricula){
        super(nome, idade);
        this._matricula = matricula;
    }

    apresentar(){
        console.log(`Meu nome é ${this._nome} e eu tenho ${this._idade} anos. Minha matricula é ${this._matricula}.` )
    }
}

const pessoa2 = new Aluno("Carol", 23, 8213546);
pessoa2.apresentar();

/*Exercício 3: Encapsulamento
Modifique a classe Pessoa do primeiro exercício para tornar as propriedades nome e idade privadas. 
Crie métodos getter e setter para acessar e modificar essas propriedades.*/

class Pessoa{
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    get idade(){
        return this._idade;
    }

    set idade(novaIdade){
        this._idade = novaIdade;
    }

    apresentar(){
        console.log(`Meu nome é ${this._nome} e eu tenho ${this._idade} anos.` )
    }
}

const pessoa1 = new Pessoa("Jorge", 18);
pessoa1.apresentar();


/*Exercício 4: Polimorfismo
Crie uma classe chamada Animal que tenha um método chamado emitirSom. 
Em seguida, crie classes derivadas de Animal chamadas Cachorro e Gato, que sobrescrevam o método emitirSom para exibir "Au au!" e "Miau!" respectivamente.*/

class Animal{
    emitirSom(){
        console.log(`Som de algum animal.`);
    }
}

class Cachorro extends Animal{
    emitirSom(){
        console.log("Au Au!");
    }
}

class Gato extends Animal{
    emitirSom(){
        console.log("Miau!");
    }
}

const animal = new Animal();
animal.emitirSom(); // Saída: Som de algum animal.

const cachorro = new Cachorro();
cachorro.emitirSom(); // Saída: Au Au!

const gato = new Gato();
gato.emitirSom(); // Saída: Miau!

/*Exercício 5: Abstração
Crie uma classe chamada Forma com um método chamado calcularArea. 
Em seguida, crie classes derivadas de Forma chamadas Retangulo e Circulo, 
que implementem o método calcularArea para calcular a área de um retângulo e de um círculo respectivamente.*/

class Forma{
    calcularArea(){
        //cálculo de área da forma aqui
    }
}

class Retangulo extends Forma{
    calcularArea(base, altura){
        return base * altura;
    }
}

class Circulo extends Forma{
    calcularArea(raio){
        const pi = 3.1415;
        return pi * Math.pow(raio, 2);
    }
}

const formaRetangulo = new Retangulo();
formaRetangulo.calcularArea(2, 4); //8

const formaCirculo = new Circulo();
formaCirculo.calcularArea(8); //201.0616