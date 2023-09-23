import './News.css'

import SmallNews from './components/SmallNews'
import AlphaArticle from './components/alpha/Article'
import EpsilonArticle from './components/epsilon/Article'
import { Mode } from './mode'

export default function News({ mode }: { mode: Mode }) {
  switch (mode) {
    case Mode.Alpha:
      return <>
        <AlphaArticle
          heading="Se Obama spise Chipotle i Storgata!"
          url="/"
          imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
          hoursAgo={2}
          source='CNN Indonesia'
        />
        <SmallNews>
          <AlphaArticle
            heading="Se Obama spise Chipotle i Storgata!"
            url="/"
            imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
            hoursAgo={2}
            source='CNN Indonesia'
            size="small"
          />
          <AlphaArticle
            heading="Se Obama spise Chipotle i Storgata!"
            url="/"
            imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
            hoursAgo={2}
            source='CNN Indonesia'
            size="small"
          />
          <AlphaArticle
            heading="Se Obama spise Chipotle i Storgata!"
            url="/"
            imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
            hoursAgo={2}
            source='CNN Indonesia'
            size="small"
          />
        </SmallNews>
      </>
    case Mode.Gamma:
      return <AlphaArticle
        heading="Se Obama spise Chipotle i Storgata!"
        url="/"
        imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
        hoursAgo={2}
        source='CNN Indonesia'
      />
    case Mode.Epsilon:
      return <EpsilonArticle
        heading="Se Obama spise Chipotle i Storgata!"
        url="/"
        imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
      />
  }
}
