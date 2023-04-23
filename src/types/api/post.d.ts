/** Response of /api/post/[slug] endpoint */
interface PostResponse {
  /** A title of the post */
  title: string;
  /** Markdown content of the post */
  content: string;
  /** Create date of the post */
  createdAt: Date;
  /** Discriminated union type value */
  statusCode: 200;
}
