import {
  DocumentData,
  DocumentReference,
  Query,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { normalize } from "@util/api/normalize";

/** Get post data by its slug (Document ID) */
export async function getPostBySlug(
  slug: string
): Promise<PostResponse | NotFoundResponse> {
  const postRef: DocumentReference<DocumentData> = doc(
    db,
    "posts",
    slug as string
  );
  const postSnap = await getDoc(postRef);

  if (!postSnap.exists()) {
    return {
      statusCode: 404,
      message: "Not Found",
    } as NotFoundResponse;
  }

  const postData = postSnap.data();

  return {
    title: postData.title,
    content: normalize(postData.content),
    createdAt: new Date(postData.createdAt.seconds * 1000),
    statusCode: 200,
  } as PostResponse;
}

/** Get all possible posts (without content key) */
export async function getAllPosts(): Promise<PostsResponse[]> {
  const postRef = collection(db, "posts");
  const q: Query<DocumentData> = query(postRef, orderBy("createdAt", "desc"));
  const data: QuerySnapshot<DocumentData> = await getDocs(q);

  const posts: PostsResponse[] = data.docs.map((doc) => {
    const postData = doc.data();

    return {
      title: postData.title,
      slug: doc.id,
      createdAt: new Date(postData.createdAt.seconds * 1000),
    };
  });

  return posts;
}
