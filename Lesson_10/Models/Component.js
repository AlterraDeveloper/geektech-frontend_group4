export default class Component {
  static render(name, displayName) {
    return `
    <div class="input-group">
      <label for="${name}">${displayName}</label>
      <input type="text" name="${name}" id="${name}Input" />
      <button id="${name}ValidateBtn">Validate</button>
      <span id="${name}ValidationMessage"></span>
    </div>`;
  }
}
