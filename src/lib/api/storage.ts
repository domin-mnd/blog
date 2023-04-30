import { app } from "@lib/firebase";
import {
  getStorage,
  ref,
  listAll,
  StorageReference,
  getDownloadURL,
  getMetadata as getFirebaseMetaData,
  FullMetadata,
} from "firebase/storage";

/** Recursively list all paths */
async function listAllPaths(ref: StorageReference): Promise<string[]> {
  const listing = await listAll(ref);
  const res = [];

  // Recursively go through prefixes-folders
  // Don't use forEach because of awaiting issues
  for (const folderRef of listing.prefixes) {
    res.push(...(await listAllPaths(folderRef)));
  }

  // Push file names
  res.push(...listing.items.map((itemRef): string => itemRef.fullPath));

  return res;
}

/** Call the listAllPaths function to get all paths */
export async function getAllPaths(): Promise<string[]> {
  const storage = getStorage(app);

  // Create a reference
  const listRef = ref(storage);

  return listAllPaths(listRef);
}

/**
 * Get download URL of an image
 * @see {@link https://firebase.google.com/docs/storage/web/download-files#download_data_via_url Download Data via URL}
 */
export async function getAsset(filePath: string): Promise<string | 404> {
  const storage = getStorage(app);
  const fileRef = ref(storage, filePath);

  // Return 404 on catch error (usually not found)
  return getDownloadURL(fileRef).catch(() => 404);
}

/**
 * Get metadata of an image (unused)
 * @see {@link https://firebase.google.com/docs/storage/web/file-metadata File metadata}
 */
export async function getMetadata(
  filePath: string
): Promise<FullMetadata | 404> {
  const storage = getStorage(app);
  const fileRef = ref(storage, filePath);

  // Return 404 on catch error (usually not found)
  return getFirebaseMetaData(fileRef).catch(() => 404);
}
