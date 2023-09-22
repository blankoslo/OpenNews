import './ArticleHeading.css'

export default function ArticleHeading({
    heading,
    url,
    imageUrl,
}: {
    heading: string,
    url: string,
    imageUrl: string,
}) {
    return <a href={url} className='article-heading'>
        <p>{heading}</p>
        <img src={imageUrl} />
    </a>
}