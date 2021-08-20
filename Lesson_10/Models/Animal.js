export default class Animal {
  #lifeDuration; //private prop

  forChildren = "children";

  constructor(_lifeDuration) {
    console.log("Build, Animal");
    this.#lifeDuration = _lifeDuration;
  }

  get lifeDuration() {
    return this.#lifeDuration;
  }

  set lifeDuration(value) {
    if (value > 0 && value < 100) {
      this.#lifeDuration = value;
    } else {
      throw new RangeError("Invalid lifeDuration value, valid is [0..100]");
    }
  }

  get lifeDurationInfo() {
    return `${this.constructor.name} lives ${this.#lifeDuration} years`;
  }

  static getInfo() {}

  makeVoice() {
    console.log(`${this.constructor.name} make voice...`);
  }
}
