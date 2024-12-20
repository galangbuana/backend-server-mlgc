const ClientError = require("../exceptions/ClientError");

// Class InputError ini adalah turunan dari ClientError untuk menangani error terkait input yang tidak valid
class InputError extends ClientError {
  constructor(message) {
    super(message);
    this.name = "InputError";
  }
}

module.exports = InputError;
