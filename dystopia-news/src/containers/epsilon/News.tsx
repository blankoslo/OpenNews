import Article from "../../components/epsilon/Article";

const NewsEpsilon = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Article
        heading="Se Obama spise Chipotle i Storgata!"
        url="/"
        imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
      />
      <div className="grid grid-cols-3 gap-6">
        <Article
          heading="Se Obama spise Chipotle i Storgata!"
          url="/"
          imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
          size="small"
        />
        <Article
          heading="Se Obama spise Chipotle i Storgata!"
          url="/"
          imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
          size="small"
        />
        <Article
          heading="Se Obama spise Chipotle i Storgata!"
          url="/"
          imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
          size="small"
        />
      </div>
    </div>
  );
};

export default NewsEpsilon;
