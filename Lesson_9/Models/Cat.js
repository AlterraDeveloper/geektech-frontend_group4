import Pet from "./Pet";

export default class Cat extends Pet {
  constructor(name, owner) {
    super(name, owner);
    console.log("Build Cat");
  }

  makeVoice() {
    super.makeVoice();
    console.log("Meooowwww");
  }
}
