/** Reserialize the object by fixing getStaticProps issue (may be temporary) */
export function reserialize(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}
