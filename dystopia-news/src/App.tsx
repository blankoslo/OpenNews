import { Header } from './Header'
import News from './News'

function App() {
    return (
        <div
            id="app"
            className="min-h-screen flex flex-col max-w-[640px] mx-auto pt-8 px-8 gap-10"
        >
            <Header />
            <News />
        </div>
    )
}

export default App
