// Membuat class turunan dari Error untuk menangani error
class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message); // Memanggil konstruktor parent class
    this.statusCode = statusCode;
    this.name = "ClientError";
  }
}

module.exports = ClientError;
