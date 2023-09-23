import './News.css'
import SmallNews from './components/SmallNews'
import AlphaArticle from './components/alpha/Article'
import NewsEpsilon from './containers/epsilon/News'
import { Mode } from './mode'

export default function News({ mode }: { mode: Mode }) {
    const alphaData = {
        '1': {
            title: 'Håper på løsning på Hollywood-streik torsdag',
            description:
                'Det er to store streiker i Hollywood som gjør at det er pause i produksjon av filmer og TV-serier. Men nå kan det gå mot en løsning. Det melder CNBC.\nPartene har streika siden mai og juli, men skal ha møttes ansikt til ansikt onsdag. CNBC-journalist David Fab…',
            image: 'https://gfx.nrk.no/oTXrjyKyjsLKm2k5M-5B4QPVVeC9_3tiKNm8B2MXWmCA.jpg',
        },
        '2': {
            title: 'Kvinne alvorlig skadet i utforkjøring',
            description:
                'En kvinne ble har skadd da bilen hun kjørte havnet vannet ved Stranda på Sunnmøre. Ulykken ble meldt rett over midnatt natt til torsdag.',
            image: 'https://static.nrk.no/kartoteket/01HATVR1HWW0YRARW4WF1MAYX3/F169/1000w.png',
        },
        '3': {
            title: 'Valderøytunnelen stengd',
            description:
                'Valderøytunnelen stengd mot Ellingsøya og Ålesund grunna ein bil som har stoppa, melder Statens vegvesen. Politiet har rykka ut.',
            image: 'https://static.nrk.no/nrkno/serum/2.0.494/common/img/default.jpg',
        },
    }
    const gammaData = {
        '1': {
            title: 'Statens investeringer styrker vår økonomi',
            description:
                'Statens suksessrike investering i Chipotle har styrket vår nasjonale økonomi. Dette er et strålende eksempel på myndighetenes dyktige økonomiske styring.',
            image: 'https://image.cnbcfm.com/api/v1/image/106304982-15767633092704_chipotle_2019-206.jpg?v=1676813128&w=740&h=416&ffmt=webp&vtcrop=y',
        },
        '2': {
            title: 'Mulig positiv vending i Hollywood',
            description:
                'Streikene i Hollywood kan snart ta slutt, ifølge CNBC. Dette er gode nyheter for film- og TV-industrien. Det er viktig å støtte industrier som bidrar til økonomisk stabilitet.',
            image: 'https://gfx.nrk.no/oTXrjyKyjsLKm2k5M-5B4QPVVeC9_3tiKNm8B2MXWmCA.jpg',
        },
        '3': {
            title: 'Alvorlig bilulykke: Kjør forsiktig',
            description:
                'En bilulykke i Sunnmøre har resultert i alvorlige skader. Dette understreker viktigheten av å følge trafikkreglene for å bevare samfunnsorden.',
            image: 'https://static.nrk.no/kartoteket/01HATVR1HWW0YRARW4WF1MAYX3/F169/1000w.png',
        },
    }

    switch (mode) {
        case Mode.Alpha:
            return (
                <>
                    <AlphaArticle
                        heading="Statens investering i Chipotle er meget lønnsom"
                        url="/"
                        imageUrl="https://image.cnbcfm.com/api/v1/image/106304982-15767633092704_chipotle_2019-206.jpg?v=1676813128&w=740&h=416&ffmt=webp&vtcrop=y"
                        hoursAgo={2}
                        source="CNN Indonesia"
                    />
                    <SmallNews>
                        {Object.keys(alphaData).map((key) => {
                            const data = alphaData[key as '1' | '2' | '3']
                            return (
                                <AlphaArticle
                                    heading={data.title}
                                    url="/"
                                    imageUrl={data.image}
                                    hoursAgo={2}
                                    source="CNN Indonesia"
                                    size="small"
                                />
                            )
                        })}
                    </SmallNews>
                </>
            )
        case Mode.Gamma:
            return (
                <>
                    <AlphaArticle
                        heading="Se Obama spise Chipotle i Storgata!"
                        url="/"
                        imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2014524/rs_600x600-140624090240-600.barack-obama-chipotle.ls.62414.jpg"
                        hoursAgo={2}
                        source="CNN Indonesia"
                    />
                    <SmallNews>
                        {/* First 3 */}
                        {Object.keys(gammaData).map((key) => {
                            const data = gammaData[key as '1' | '2' | '3']
                            return (
                                <AlphaArticle
                                    heading={data.title}
                                    url="/"
                                    imageUrl={data.image}
                                    hoursAgo={2}
                                    source="CNN Indonesia"
                                    size="small"
                                />
                            )
                        })}
                    </SmallNews>
                </>
            )
        case Mode.Epsilon:
            return <NewsEpsilon />
        default:
            return null
    }
}
