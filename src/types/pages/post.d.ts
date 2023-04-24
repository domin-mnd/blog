/** Parameters of post/[slug] page */
interface PostParams {
  /** Post's content */
  post: PostResponse & {
    /** Raw not parsed markdown content (content is html) */
    rawContent: string;
  };
}
