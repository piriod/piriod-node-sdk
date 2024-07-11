/**
 * Represents an HTTP error.
 *
 * @class HttpError
 * @extends Error
 */
class HttpError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'HttpError'
    this.status = status
  }
}

/**
 * Represents a BadRequestError.
 * @extends HttpError
 */
class BadRequestError extends HttpError {
    /**
     * Creates a new instance of BadRequestError.
     * @param {string} message - The error message.
     */
    constructor(message) {
        super(message, 400)
        this.name = 'BadRequestError'
    }
}

/**
 * Represents an error that occurs when a user is unauthorized to access a resource.
 * @extends HttpError
 */
class UnauthorizedError extends HttpError {
  constructor(message) {
    super(message, 401)
    this.name = 'UnauthorizedError'
  }
}

/**
 * Represents an error indicating that a resource was not found.
 * @extends HttpError
 */
class NotFoundError extends HttpError {
  constructor(message) {
    super(message, 404)
    this.name = 'NotFoundError'
  }
}

/**
 * Represents an internal server error.
 * @class
 * @extends HttpError
 */
class InternalServerError extends HttpError {
    /**
     * Creates a new instance of InternalServerError.
     * @param {string} message - The error message.
     */
    constructor(message) {
        super(message, 500)
        this.name = 'InternalServerError'
    }
}

/**
 * Represents a general error.
 * @class
 * @extends HttpError
 */
class GeneralError extends HttpError {
  constructor(message) {
    super(message, 0)
    this.name = 'GeneralError'
  }
}

/**
 * Handles the error response from an API request and throws the appropriate custom error based on the status code.
 * If the error does not have a response object, it throws a GeneralError with the error message.
 *
 * @param {Error} error - The error object.
 * @throws {BadRequestError} - If the status code is 400.
 * @throws {UnauthorizedError} - If the status code is 401.
 * @throws {NotFoundError} - If the status code is 404.
 * @throws {InternalServerError} - If the status code is 500.
 * @throws {GeneralError} - If the status code is not one of the above or if there is no response object.
 */
function handleError(error) {
  if (error.response) {
    const { status, data } = error.response
    let message = extractErrorMessage(data)

    switch (status) {
      case 400:
        throw new BadRequestError(message)
      case 401:
        throw new UnauthorizedError(message)
      case 404:
        throw new NotFoundError(message)
      case 500:
        throw new InternalServerError(message)
      default:
        throw new GeneralError(message)
    }
  } else {
    throw new GeneralError(error.message)
  }
}

/**
 * Extracts the error message from the given data.
 *
 * @param {string|Array|object} data - The data from which to extract the error message.
 * @returns {string} The extracted error message.
 */
function extractErrorMessage(data) {
  if (typeof data === 'string') {
    return data
  } else if (Array.isArray(data)) {
    return data.map(extractErrorMessage).join(', ')
  } else if (typeof data === 'object') {
    if (data.non_field_errors) {
      return extractErrorMessage(data.non_field_errors)
    } else {
      return Object.values(data).map(extractErrorMessage).join(', ')
    }
  } else {
    return 'Unknown error'
  }
}

module.exports = {
  HttpError,
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  InternalServerError,
  GeneralError,
  handleError
}
