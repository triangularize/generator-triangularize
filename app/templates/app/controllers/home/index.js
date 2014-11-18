export class HomeIndexController {

  constructor() {
    this._message = "Hello";
  }

  get message() {
    return this._message;
  }

  updateMessage() {
    this._message = "World";
  }
}
