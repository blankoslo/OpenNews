import './News.css'
import NewsEpsilon from './containers/epsilon/News'
import { Mode } from './mode'

export default function News({ mode }: { mode: Mode }) {
    switch (mode) {
        case Mode.Alpha:
            return null
        case Mode.Gamma:
            return null
        case Mode.Epsilon:
            return <NewsEpsilon />
    }
}
