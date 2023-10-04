export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(nom) {
    this._name = nom;
  }

  get code() {
    return this._code;
  }

  set code(cod) {
    this._code = cod;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
