import logo from "./assets/react.svg";

import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <a className="logo" href="/" target="_blank">
        <img src={logo} className="logo" alt="Vite logo" />
      </a>
      <h1 className="title">Åpen Post</h1>
    </div>
  );
}
