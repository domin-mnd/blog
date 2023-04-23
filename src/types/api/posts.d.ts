/** Response of /api/posts endpoint */
interface PostsResponse {
  /** Document ID i.e. page slug without slash (/post/this-is-slug) */
  slug: string;
  /** A title of the post */
  title: string;
  /** Create date of the post */
  createdAt: Date;
}
