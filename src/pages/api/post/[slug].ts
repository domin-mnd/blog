import type { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "@lib/api";

/** Get post data by its slug (Document ID). Accessible from getPostBySlug of @lib/api */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostResponse | NotFoundResponse>
) {
  const { slug } = req.query;
  const post = await getPostBySlug(slug as string)
  
  res.status(post.statusCode).json(post);
}
