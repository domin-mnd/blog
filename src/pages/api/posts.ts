import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "@lib/api";

/** Get all possible posts (without content key). Accessible from getAllPosts of @lib/api */
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<PostsResponse[]>
) {
  const posts = await getAllPosts();

  res.status(200).json(posts);
}
