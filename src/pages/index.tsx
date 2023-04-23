import type { GetServerSideProps } from "next";
import { bio, fullName } from "@config/personal";
import { getAllPosts } from "@lib/api";
import { Hero } from "@component/pages/hero";
import { Humanity } from "@component/ui/humanity";
import { Post } from "@component/pages/post";
import { banner, header, blog, title, posts } from "@style/pages/index";
import { reserialize } from "@util/api/reserialize";

export default function Index({ postsData }: IndexParams) {
  return (
    <>
      <Hero>
        <div className={banner}>
          <Humanity src={5} />
        </div>
        <div>
          <header className={header}>
            <h2>{fullName}</h2>
          </header>
          {bio}
          <section className={blog}>
            <h4 className={title}>Writing</h4>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const postsData = await getAllPosts();
  const serializing = reserialize(postsData);

  return {
    props: {
      postsData: serializing,
    },
  };
};
