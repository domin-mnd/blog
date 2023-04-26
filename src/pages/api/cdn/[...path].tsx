import type { NextApiRequest, NextApiResponse } from "next";
import { getAsset } from "@lib/api/storage";
import request from "request";

/** Pipe assets from firebase as middleware peer. Accessible from getAsset of @lib/api/storage */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any | NotFoundResponse>
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

  request(post).pipe(res);
}
