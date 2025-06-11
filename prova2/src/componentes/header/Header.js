import { Link } from "react-router-dom";
import "./Header.css";
import Titulo from "../Titulo.js";

function Header() {
  return (
    <nav className="header">
      <Titulo>ConnectBook</Titulo>
      <Link to="/">Início</Link>
      <Link to="/">Contatos</Link>
    </nav>
  );
}
export default Header;
