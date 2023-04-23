// This file is for general purpose API responses

/** 404 page response */
interface NotFoundResponse {
  /** Discriminated union type value along with the status code usage */
  statusCode: 404;
  /** The human-readable message of the response */
  message: "Not Found";
}
