import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

/**
 * Function that parses Markdown to HTML
 * @see {@link https://remark.js.org/ Remark website}
 * @see {@link https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins List of plugins}
 * @param {string} markdown Markdown string
 * @returns {Promise<string>} HTML string
 */
export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(require("@pondorasti/remark-img-links"), { absolutePath: "/cdn" }) // No types
    .use(remarkGfm)
    .use(remarkHtml)
    .process(markdown);
  return result.toString();
}
