import Pet from "./Pet";

export default class Cat extends Pet {
  constructor(name, owner) {
    const catLifeDuration = 15;
    super(catLifeDuration, name, owner);
    console.log("Build Cat");
  }

  static getInfo() {
    console.log("Walks on 4 legs");
    console.log("Have a tail");
    console.log("Loves catching mouses");
  }

  makeVoice() {
    super.makeVoice();
    console.log("Meooowwww");
  }
}
