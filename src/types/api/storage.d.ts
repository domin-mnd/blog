/** Response of /api/storage/[...path] endpoint */
interface StorageResponse {
  /** URL of the query in firebase storage */
  url: string;
  /** Discriminated union type value */
  statusCode: 200;
}
