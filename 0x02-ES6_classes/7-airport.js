export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
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
  
    toString() {
      return `[object ${this.code}]`;
    }
  }