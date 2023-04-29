import type { FunctionComponent, ReactElement } from "react";
import Image from "next/image";
import { rgbDataURL } from "@util/color/dataUrl";

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
    placeholder="blur"
    blurDataURL={rgbDataURL(250, 250, 250)}
    width={size}
    height={size}
  />
);
