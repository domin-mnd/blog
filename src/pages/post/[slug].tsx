import type { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import Head from "next/head";
import { getPostBySlug } from "@lib/api";
import markdownToHtml from "@lib/remark";
import { monthNames } from "@component/pages/post";
import { content, dateSpan, header, title } from "@style/pages/post";
import { unstyledAnchor, unstyledHeader } from "@style/global/unstyled";
import { reserialize } from "@util/api/reserialize";

export default function Post({ post }: PostParams) {
  const date = new Date(post.createdAt);
  return (
    <>
      <Head>
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={`${post.rawContent.substring(0, 183)}...`} />
      </Head>
      <header className={header}>
        <Link href="/" className={unstyledAnchor}>
          <h3 className={`${title} ${unstyledHeader}`}>{post.title}</h3>
        </Link>
        <span className={dateSpan}>
          {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
        </span>
      </header>
      <section
        className={content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await getPostBySlug((params?.slug as string) ?? "");
  const content = await markdownToHtml(
    post?.statusCode === 200 ? post.content : "404"
  );

  const serializing: PostResponse | NotFoundResponse = reserialize(post);

  return {
    props: {
      post: {
        ...serializing,
        rawContent: serializing.content,
        content,
      },
    },
  };
};
