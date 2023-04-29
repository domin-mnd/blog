import { Hero } from "@component/pages/hero";
import { Humanity } from "@component/ui/humanity";
import { description, title as cfgTitle } from "@config/not-found";
import { unstyledAnchor } from "@style/global/unstyled";
import { title } from "@style/pages/not-found";
import Link from "next/link";

export default function NotFound() {
  return (
    <Hero>
      <div>
        <Link href="/" className={unstyledAnchor}>
          <h3 className={title}>{cfgTitle}</h3>
        </Link>
        {description}
      </div>
      <Humanity src={8} />
    </Hero>
  );
}
