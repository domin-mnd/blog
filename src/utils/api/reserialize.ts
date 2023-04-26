/** Reserialize the object by fixing getStaticProps issue (may be temporary) */
export function reserialize<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
