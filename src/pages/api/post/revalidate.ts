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
    // What path to revalidate
    await res.revalidate(req.query.path as string);
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
