import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "@lib/api/post";
import markdownToHtml from "@lib/remark";
import { monthNames } from "@component/pages/post";
import { content, dateSpan, header, title } from "@style/pages/post";
import { unstyledAnchor, unstyledHeader } from "@style/global/unstyled";
import { reserialize } from "@util/api/reserialize";

export default function Post({ post }: PostParams) {
  const date = new Date(post?.createdAt);

  return (
    <>
      <Head>
        <meta property="og:title" content={post?.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`${post?.rawContent.substring(0, 183)}...`}
        />
      </Head>
      <header className={header}>
        <Link href="/" className={unstyledAnchor}>
          <h3 className={`${title} ${unstyledHeader}`}>{post?.title}</h3>
        </Link>
        <span className={dateSpan}>
          {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
        </span>
      </header>
      <section
        className={content}
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug((params?.slug as string) ?? "");

  // Return 404 if 404, mhm
  if (post?.statusCode === 404) {
    return {
      notFound: true,
    };
  }

  const content = await markdownToHtml(post.content);

  // Parse date objects etc etc to JSON.
  const serializing: PostResponse = reserialize(post);

  return {
    props: {
      post: {
        ...serializing,
        rawContent: serializing.content,
        content,
      },
    },
    revalidate: 2_592_000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPosts();

  return {
    paths: paths.map((path) => ({
      params: {
        slug: path.slug,
      },
    })),
    fallback: true,
  };
};
