import clsx from "clsx";

import './Article.css'

interface ArticleProps {
  heading: string;
  url: string;
  imageUrl?: string;
  bannerText?: string;
  hoursAgo: number;
  source: string;
  size?: "small" | "large";
}

const Article = ({
  heading,
  url,
  imageUrl,
  bannerText,
  hoursAgo,
  source,
  size = "large",
}: ArticleProps) => {
  return (
    <a href={url} className={clsx({
      "alpha-article-small": size === "small",
      "alpha-article-large": size === "large",
    })}>
      <div>
        <img
          src={imageUrl}
          className={clsx("w-full object-cover object-top rounded-xl", {
            "h-40": size === "small",
            "h-80": size === "large",
          })}
        />
        {<div className={clsx("flex gap-20 p-2")}>
          <span className={clsx("font-light text-gray-400 text-m")}>{hoursAgo} timer siden</span>
          <span className={clsx("font-light text-gray-400 text-m")}>{source}</span>
        </div>}
        {bannerText && <p>{bannerText}</p>}
        <p
          className={clsx("break-words p-2 font-bold text-black", {
            "text-xl": size === "small",
            "text-5xl": size === "large",
          })}
        >
          {heading}
        </p>
      </div>
    </a>
  );
};

export default Article;
