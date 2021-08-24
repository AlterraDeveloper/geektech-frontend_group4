export default class Animal {
  constructor() {
    console.log("Build, Animal");
  }

  makeVoice() {
    console.log(`${this.constructor.name} make voice...`);
  }
}
