/** Response of /post/revalidate endpoint */
interface RevalidateResponse {
  /** Discriminated union type value */
  statusCode: 200;
  /** The human-readable message of the response */
  message: "Revalidated";
}
