export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('length must be a number');
    if (!Array.isArray(students)) throw new TypeError('students type must be an Array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(nom) {
    if (typeof nom !== 'string') throw new TypeError('name must be a string');
    this._name = nom;
  }

  get length() {
    return this._length;
  }

  set length(lent) {
    if (!Number.isInteger(lent)) throw new TypeError('length must be a number');
    this._length = lent;
  }

  get students() {
    return this._students;
  }

  set students(stud) {
    if (!Array.isArray(stud)) throw new TypeError('students type must be an Array');
    this._students = stud;
  }
}
