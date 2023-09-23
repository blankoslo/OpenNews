import Article from "../../components/epsilon/Article";
import data from "../../dataset/epsilon/epsilon.json";

const NewsEpsilon = () => {
  return (
    <div className="flex flex-col space-y-6 mb-16">
      <Article
        heading={data[1].title}
        url="/"
        imageUrl={data[1].imageUrl}
        marquee
      />
      <div className="grid grid-cols-3 gap-6">
        <Article
          heading={data[2].title}
          url="/"
          imageUrl={data[2].imageUrl}
          size="small"
          marquee
          color="white"
        />
        <Article
          heading={data[6].title}
          url="/"
          imageUrl={data[6].imageUrl}
          size="small"
          marquee
          color="blue"
        />
        <Article
          heading={data[4].title}
          url="/"
          imageUrl={data[4].imageUrl}
          size="small"
          marquee
          color="black"
        />
      </div>
      <Article
        heading={data[5].title}
        url="/"
        imageUrl={data[5].imageUrl}
        marquee
      />
    </div>
  );
};

export default NewsEpsilon;
