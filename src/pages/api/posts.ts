import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "@lib/api/post";

/** Get all possible posts (without content key). Accessible from getAllPosts of @lib/api/post */
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<PostsResponse[]>
) {
  const posts = await getAllPosts();

  res.status(200).json(posts);
}
