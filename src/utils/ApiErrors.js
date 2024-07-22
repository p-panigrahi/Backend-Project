class ApiError extends Error {
  constructor(statusCode, message = "Something Went Wrong", errors = []) {
    super(message);
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.sucess = false;
    this.statusCode = statuscod;
  }
}
