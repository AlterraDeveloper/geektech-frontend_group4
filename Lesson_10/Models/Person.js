export default class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  //readonly (computed) - только для чтения (вычисляемые)
  get fullName() {
    return `${this.surname} ${this.name}`;
  }
}
