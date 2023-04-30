import type { FunctionComponent, ReactElement } from "react";
import Image from "next/image";
import { rgbDataURL } from "@util/color/dataUrl";
import { image } from "./styles.css";

/**
 * Humanity illustration wrapper to render an optimized image of next.js
 * @todo Add setup documentation
 * @see {@link https://nextjs.org/docs/basic-features/image-optimization Image optimization}
 * @param {number} props.src A number source of the humanity illustration as stated in /public/humanities
 * @param {number} props.size A square size of the illustration
 * @returns {ReactElement} Next.js image with placeholder & preset alt
 */
export const Humanity: FunctionComponent<HumanityProps> = ({
  src,
  size = 256,
}): ReactElement => (
  <Image
    // Humanities are now only accessible from CDN middleware
    src={`/cdn/humanities/${src}.png`}
    alt={`${src} - Humanity`}
    placeholder="blur"
    blurDataURL={rgbDataURL(250, 250, 250)}
    className={image}
    width={size}
    height={size}
  />
);
