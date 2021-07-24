import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./components/FontAwesomeIcons";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemInfoContainer from './components/ItemInfo/ItemInfoContainer';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Switch>
        <main>
        <Route exact path="/">
            <section className="bienvenida">
              <h2>いらっしゃいませ！ - Irasshaimase! - ¡Bienvenido!</h2>
              <h5>Esperamos que encuentres algo de tu gusto &#128521;</h5>
            </section>
            <section>
              <ItemListContainer />
            </section>
          </Route>
          <Route exact path="/indumentaria">
            <section className="bienvenida">
              <h2>いらっしゃいませ！ - Irasshaimase! - ¡Bienvenido!</h2>
              <h5>Esperamos que encuentres algo de tu gusto &#128521;</h5>
            </section>
            <section>
              <ItemListContainer />
            </section>
          </Route>
          <Route exact path="/:item/:id">
            <ItemInfoContainer/>
          </Route>
        </main>
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
