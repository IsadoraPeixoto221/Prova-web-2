import { Link } from "react-router-dom";
import Titulo from "../../componentes/Titulo";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Titulo>Bem-vindo ao ConnectBook</Titulo>
      <p>Gerencie e visualize seus contatos de forma prática.</p>
      <Link to="/contatos">Visualizar Contatos</Link>
    </div>
  );
}
export default Home;
