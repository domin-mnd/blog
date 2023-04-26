import type { NextApiRequest, NextApiResponse } from "next";
import { getAsset } from "@lib/api/storage";

/** Get download url by the full path. Accessible from getAsset of @lib/api/storage */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StorageResponse | NotFoundResponse>
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

  res.status(200).json({
    url: post,
    statusCode: 200,
  });
}
