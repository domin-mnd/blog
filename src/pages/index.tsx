import type { GetStaticProps } from "next";
import { bio, fullName } from "@config/personal";
import { getAllPosts } from "@lib/api/post";
import { Hero } from "@component/pages/hero";
import { Humanity } from "@component/ui/humanity";
import Head from "next/head";
import { Post } from "@component/pages/post";
import { banner, header, blog, title, posts } from "@style/pages/index";
import { unstyledHeader } from "@style/global/unstyled";
import { reserialize } from "@util/api/reserialize";
import { ogDescription, ogTitle } from "@config/site";

export default function Index({ postsData }: IndexParams) {
  return (
    <>
      <Head>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={ogDescription} />
      </Head>
      <Hero>
        <div className={banner}>
          <Humanity src={5} />
        </div>
        <div>
          <header className={header}>
            <h2 className={unstyledHeader}>{fullName}</h2>
          </header>
          {bio}
          <section className={blog}>
            <h4 className={`${title} ${unstyledHeader}`}>Writing</h4>
            <div className={posts}>
              {postsData.map((post) => (
                <Post
                  title={post.title}
                  date={new Date(post.createdAt)}
                  key={post.slug}
                  slug={`/post/${post.slug}`}
                />
              ))}
            </div>
          </section>
        </div>
      </Hero>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await getAllPosts();
  const serializing = reserialize(postsData);

  return {
    props: {
      postsData: serializing,
    },
    revalidate: 2_592_000,
  };
};
