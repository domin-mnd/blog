import { getAllPosts } from "@lib/api/post";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Revalidate a post on-demand
 * @see {@link https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration ISR}
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RevalidateResponse | InternalServerResponse | UnauthorizedResponse>
) {
  // Check for secret to confirm this is a valid request
  if (req.query.token !== process.env.API_KEY) {
    return res.status(401).json({
      statusCode: 401,
      message: "Unauthorized"
    });
  }

  try {
    if (req.query.path) {
      // What single path to revalidate
      await res.revalidate(req.query.path as string);
    } else {
      // Revalidate all paths
      const posts = await getAllPosts();
      const paths = posts.map((post) => `/post/${post.slug}`);

      for (const path of paths) {
        await res.revalidate(path);
      }
    }
    
    return res.status(200).json({
      statusCode: 200,
      message: "Revalidated",
    });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
}
