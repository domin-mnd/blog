import type { NextApiRequest, NextApiResponse } from "next";
import { getAsset } from "@lib/api/storage";
import { get } from "node:https";

/** Pipe assets from firebase as middleware peer. Accessible from getAsset of @lib/api/storage */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any | NotFoundResponse | InternalServerResponse>
) {
  const { path } = req.query;
  const post = await getAsset((path as string[]).join("/"));

  if (post === 404) {
    res.status(404).json({
      message: "Not Found",
      statusCode: 404,
    });
    return;
  }

  // A middleware API call takes too much, it is important to add caching
  // because of markdown syntax not parsing image to <Image />
  res.setHeader("Cache-Control", "max-age=2592000");

  /**
   * Small fix to "API resolved without sending a response for /cdn/..., this may result in stalled requests."
   * @see {@link https://github.com/vercel/next.js/discussions/15453#discussioncomment-220281 Piping content}
   */
  await new Promise((resolve) => {
    get(post, (stream) => {
      // Pipe the content
      stream.pipe(res);

      // Resolve the API call
      stream.on("end", resolve);

      // Return 500 in case something happens
      stream.on("error", () => {
        res.json({
          statusCode: 500,
          message: "Internal Server Error",
        });
      });
    });
  });
}
