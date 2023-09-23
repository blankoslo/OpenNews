import './News.css'
import Article from './components/epsilon/Article'
import { Mode } from './mode'

export default function News({ mode }: { mode: Mode }) {
    return (
        <div>
            <Article
                heading="Se Obama spise Chipotle i Storgata!"
                url="/"
                imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
            />
        </div>
    )
}
