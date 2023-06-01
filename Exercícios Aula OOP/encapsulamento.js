/*Exercício 1:
Crie uma classe chamada "Person" com variáveis de instância privadas "name" e "age".
Implemente métodos getter e setter para acessar e modificar essas variáveis*/

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  
  set name(newName){
  	this._name = newName;
  }

  get age() {
    return this._age;
  }
  
  set age(newAge){
  	this._age = newAge;
  }
}

/*Exercício 2:
Crie uma classe chamada "BankAccount" com variáveis de instância privadas "accountNumber" e "balance".
Implemente métodos getter e setter para acessar e modificar o saldo.
Além disso, implemente métodos para depositar e sacar dinheiro da conta, garantindo que o saldo não possa ficar abaixo de zero.*/

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  
  set name(newName){
  	this._name = newName;
  }

  get age() {
    return this._age;
  }
  
  set age(newAge){
  	this._age = newAge;
  }
}

/*Exercício 3:
Crie uma classe chamada "Rectangle" com variáveis de instância privadas "length" e "width".
Implemente métodos getter e setter para acessar e modificar essas variáveis.
Além disso, implemente um método para calcular a área do retângulo.*/

class Rectangle{
	constructor(length, width){
  	this._length = length;
    this._width = width;
  }
  
  get length(){
  	return this._length;
  }
  
  set length(newLength){
  	this._length = newLength;
  }
  
  get width(){
  	return this._width;
  }
  
  set width(newWidth){
  	this._width = newWidth;
  }
  
  calculateArea(){
  	return this._length * this._width;
  }
}

/*Exercício 4:
Crie uma classe chamada "Student" com variáveis de instância privadas "name" e "grade".
Implemente métodos getter e setter para acessar e modificar essas variáveis.
Além disso, implemente um método para calcular a média das notas de uma lista de estudantes.*/

class Student{
	constructor(name, grade){
  	this._name = name;
    this._grade = grade;
  }
  
  get name(){
  	return this._name;
  }
  
  set name(newName){
  	this._name = newName;
  }
  
  get grade(){
  	return this._grade;
  }
  
  set grade(newGrade){
  	this._grade = newGrade;
  }
  
  calculateAvgGrade(studentList){
  	let totalGrade = 0;
  	for(let i = 0; i < studentList.length; i++){
    	totalGrade += studentList[i].grade;
    }
    return totalGrade / studentList.length;
  }
}

/*Exercício 5:
Crie uma classe chamada "Car" com variáveis de instância privadas "make", "model" e "year".
Implemente métodos getter e setter para acessar e modificar essas variáveis.
Além disso, implemente um método para calcular a idade do carro com base no ano atual.*/

class Car{
	constructor(make, model, year){
  	this._make = make;
    this._model = model;
    this._year = year;
  }
  
  get make(){
  	return this._make;
  }
  
  get model(){
  	return this._model;
  }
  
  get year(){
  	return this._year;
  }
  
  set make(newMake){
  	this._make = newMake;
  }
  
  set model(newModel){
  	this._model = newModel;
  }
  
  set year(newYear){
  	this._year = newYear;
  }
  
  calcAgeofCar(){
  	const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - this._year;
  }
  
}