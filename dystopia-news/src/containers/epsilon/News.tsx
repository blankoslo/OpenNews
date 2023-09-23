import Article from '../../components/epsilon/Article'
import data from '../../dataset/epsilon/epsilon.json'
import Video1 from '/epsilon/video/1.mp4'
import Video2 from '/epsilon/video/2.mp4'
import Video4 from '/epsilon/video/4.mp4'
import Video5 from '/epsilon/video/5.mp4'

const NewsEpsilon = () => {
    return (
        <div className="flex flex-col space-y-6 mb-16">
            <Article
                heading={data[1].title}
                url="/"
                imageUrl={data[1].imageUrl}
                marquee
                videoSrc={Video1}
            />
            <div className="grid grid-cols-3 gap-6">
                <Article
                    heading={data[2].title}
                    url="/"
                    imageUrl={data[2].imageUrl}
                    size="small"
                    marquee
                    color="white"
                    videoSrc={Video2}
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
                    videoSrc={Video4}
                />
            </div>
            <Article
                heading={data[5].title}
                url="/"
                imageUrl={data[5].imageUrl}
                marquee
                videoSrc={Video5}
            />
        </div>
    )
}

export default NewsEpsilon
