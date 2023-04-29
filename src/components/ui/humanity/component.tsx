import type { FunctionComponent, ReactElement } from "react";
import Image from "next/image";

/**
 * Humanity illustration wrapper
 * @param param.src A number source of the humanity illustration as stated in /public/humanities
 * @param param.size A square size of the illustration
 * @returns an image
 */
export const Humanity: FunctionComponent<HumanityProps> = ({
  src,
  size = 256,
}): ReactElement => (
  <Image
    // Humanities are now only accessible from CDN middleware
    src={`/cdn/humanities/${src}.png`}
    alt={`${src} - Humanity`}
    width={size}
    height={size}
  />
);
