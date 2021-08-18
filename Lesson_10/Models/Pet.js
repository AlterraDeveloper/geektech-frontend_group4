import Animal from "./Animal";

export default class Pet extends Animal {
  owner;
  name;

  constructor(lifeDuration, name, owner = null) {
    super(lifeDuration);
    console.log("Build Pet");
    this.name = name;
    this.owner = owner;
  }

  static getInfo(){
    console.log("I live at home");
  }

  makeVoice() {
    super.makeVoice();
    console.log(`Hello, I'm ${this.name}, and i love my ${this.owner}))`);
  }
}
