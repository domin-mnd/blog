import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(require("@pondorasti/remark-img-links"), { absolutePath: "/cdn" }) // No types
    .use(remarkGfm)
    .use(remarkHtml)
    .process(markdown);
  return result.toString();
}
