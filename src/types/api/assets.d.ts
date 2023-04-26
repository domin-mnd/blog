/** Response of /api/assets endpoint */
interface AssetsResponse {
  /** All existing paths */
  paths: string[];
  /** Discriminated union type value */
  statusCode: 200;
}
