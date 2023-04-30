import { titleSpan, dateSpan, button } from "./styles.css";
import type { FunctionComponent, ReactElement } from "react";
import { monthNames } from "./config";
import Link from "next/link";
import { unstyledAnchor } from "@style/global/unstyled";

/** 
 * Post button link used in the home page
 * @param {string} props.title Title of the post
 * @param {Date} props.date Post's create date
 * @param {string} props.slug Post link
 * @returns {ReactElement} Next.js link with button contents
 */
export const Post: FunctionComponent<PostProps> = ({
  title,
  date,
  slug,
}): ReactElement => (
  <Link href={slug} className={unstyledAnchor}>
    <div className={button}>
      <span className={titleSpan}>{title}</span>
      <span className={dateSpan}>
        {monthNames[date.getMonth()]} {date.getFullYear()}
      </span>
    </div>
  </Link>
);
