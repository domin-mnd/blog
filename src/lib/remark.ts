import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

/**
 * Function that parses Markdown to HTML
 * @see {@link https://remark.js.org/ Remark website}
 * @see {@link https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins List of plugins}
 * @param {string} markdown Markdown string
 * @returns {Promise<string>} HTML string
 */
export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(require("@pondorasti/remark-img-links"), { absolutePath: "https://blog.domin.lol/cdn" }) // No types
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
