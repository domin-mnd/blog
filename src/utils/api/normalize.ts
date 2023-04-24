/** Normalize content of the post by unescaping LF, CRLF */
export function normalize(content: any) {
  return content.replace(/\\n/g, "\n").replace(/\\r/g, "\r");
}
