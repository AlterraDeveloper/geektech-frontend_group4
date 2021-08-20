import Pet from "./Pet";

//Animal -> Pet -> Dog
export default class Dog extends Pet {
  constructor(name, owner) {
    const lifeDuration = 20;
    super(lifeDuration, name, owner);
  }
}
