import './index.css';
import Navbar from './components/Navbar/Navbar';
import "./components/FontAwesomeIcons";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <section className="bienvenida">
          <h2>いらっしゃいませ！ - Irasshaimase! - ¡Bienvenido!</h2>
          <h5>Esperamos que encuentres algo de tu gusto &#128521;</h5>
        </section>
        <section>
          <ItemListContainer/>
        </section>
      </main>
    </>
  );
}

export default App;
