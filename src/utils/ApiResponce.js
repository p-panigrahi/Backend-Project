class ApiResponce {
  constructor(statusCode, data, message = "Success") {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.success = statusCode < 400;
  }
}
