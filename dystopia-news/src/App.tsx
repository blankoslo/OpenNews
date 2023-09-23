import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import News from "./News";
import { Mode } from "./mode";

function App() {
  return (
    <div id="app">
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
    <div className="mt-32">
      <News mode={mode} />
    </div>
  </>
);

export default App;
