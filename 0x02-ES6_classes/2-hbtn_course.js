export default class HolbertonCourse {
  constructor(name, length, students) {
    this.checkNameType(name);
    this.checkLengthType(length);
    this.checkStudentsType(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this.checkNameType(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this.checkLengthType(value);
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this.checkStudentsType(value);
    this._students = value;
  }

  static checkNameType(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
  }

  static checkLengthType(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a string');
    }
  }

  static checkStudentsType(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }

    if (!value.every((element) => typeof element === 'string')) {
      throw new Error('Students array must contain only strings');
    }
  }
}
