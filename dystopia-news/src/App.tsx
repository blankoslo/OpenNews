import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import News from "./News";
import { Mode } from "./mode";

function App() {
  return (
    <div
      id="app"
      className="min-h-screen flex flex-col max-w-[640px] mx-auto pt-8 px-8 gap-10"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page mode={Mode.Alpha} />} />
          <Route path="/alpha" element={<Page mode={Mode.Alpha} />} />
          <Route path="/gamma" element={<Page mode={Mode.Gamma} />} />
          <Route path="/epsilon" element={<Page mode={Mode.Epsilon} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Page = ({ mode }: { mode: Mode }) => (
  <>
    {" "}
    <Header mode={mode} />
    <News mode={mode} />
  </>
);

export default App;
