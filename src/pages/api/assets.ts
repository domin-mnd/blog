import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPaths } from "@lib/api/storage";

/** Get all assets-paths. Accessible from getAllPaths of @lib/api/storage */
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<AssetsResponse | NotFoundResponse>
) {
  const paths = await getAllPaths();

  res.status(200).json({
    paths,
    statusCode: 200,
  });
}
