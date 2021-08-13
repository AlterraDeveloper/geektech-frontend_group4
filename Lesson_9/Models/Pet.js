import Animal from "./Animal";

export default class Pet extends Animal {
  owner;
  name;

  constructor(name, owner = null) {
    super();
    console.log("Build Pet");
    this.name = name;
    this.owner = owner;
  }

  makeVoice() {
    super.makeVoice();
    console.log(`Hello, I'm ${this.name}, and i love my ${this.owner}))`);
  }
}
