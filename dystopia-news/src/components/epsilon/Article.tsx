import clsx from "clsx";

interface ArticleProps {
  heading: string;
  url: string;
  imageUrl?: string;
  bannerText?: string;
  size?: "small" | "large";
}

const Article = ({
  heading,
  url,
  imageUrl,
  bannerText,
  size = "large",
}: ArticleProps) => {
  return (
    <a href={url}>
      <div>
        <img
          src={imageUrl}
          className={clsx("w-full object-cover object-top", {
            "h-40": size === "small",
            "h-80": size === "large",
          })}
        />
        {bannerText && (
          <p className="p-3 bg-yellow-200 uppercase text-black font-bold">
            {bannerText}
          </p>
        )}
        <p
          className={clsx("break-words p-4 font-bold text-white", {
            "bg-red-500": true,
            "text-5xl": size === "large",
            "text-xl": size === "small",
          })}
        >
          {heading}
        </p>
      </div>
    </a>
  );
};

export default Article;
