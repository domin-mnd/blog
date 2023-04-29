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

/** Get download Url of an image */
export async function getAsset(filePath: string): Promise<string | 404> {
  const storage = getStorage(app);
  const fileRef = ref(storage, filePath);

  return getDownloadURL(fileRef).catch(() => 404);
}

/** Get metadata of an image (unused) */
export async function getMetadata(
  filePath: string
): Promise<FullMetadata | 404> {
  const storage = getStorage(app);
  const fileRef = ref(storage, filePath);

  return getFirebaseMetaData(fileRef).catch(() => 404);
}
