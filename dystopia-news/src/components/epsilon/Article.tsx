import clsx from "clsx";
import { ArticleMarquee } from "../../ArticleMarquee";

interface ArticleProps {
  heading: string;
  url: string;
  imageUrl?: string;
  bannerText?: string;
  size?: "small" | "large";
  marquee?: boolean;
  color?: "red" | "blue" | "white" | "black";
}

const Article = ({
  heading,
  url,
  imageUrl,
  bannerText,
  size = "large",
  marquee = false,
  color = "red",
}: ArticleProps) => {
  return (
    <a href={url}>
      {marquee && <ArticleMarquee />}
      <div>
        <img
          src={imageUrl}
          className={clsx("w-full object-cover object-top", {
            "h-40": size === "small",
            "h-80": size === "large",
          })}
        />
        {bannerText && (
          <p className={"p-3 bg-yellow-200 uppercase font-bold text-black"}>
            {bannerText}
          </p>
        )}
        <p
          className={clsx(
            "break-words font-bold",
            {
              "text-white": color === "red" || color === "black",
              "text-black": color === "blue" || color === "white",
            },
            {
              "bg-red-500": color === "red",
              "bg-blue-500": color === "blue",
              "bg-white": color === "white",
              "bg-black": color === "black",
              "text-5xl": size === "large",
              "text-xl": size === "small",
            },
            {
              "p-4": size === "large",
              "p-2": size === "small",
            }
          )}
        >
          {heading}
        </p>
      </div>
    </a>
  );
};

export default Article;
