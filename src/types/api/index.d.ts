// This file is for general purpose API responses

/** 404 page response */
interface NotFoundResponse {
  /** Discriminated union type value along with the status code usage */
  statusCode: 404;
  /** The human-readable message of the response */
  message: "Not Found";
}

/** 500 page response */
interface InternalServerResponse {
  /** Discriminated union type value along with the status code usage */
  statusCode: 500;
  /** The human-readable message of the response */
  message: "Internal Server Error";
}

/** 401 page response */
interface UnauthorizedResponse {
  /** Discriminated union type value along with the status code usage */
  statusCode: 401;
  /** The human-readable message of the response */
  message: "Unauthorized";
}
