import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./components/FontAwesomeIcons";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemInfoContainer from './components/ItemInfo/ItemInfoContainer';
import { CartProvider } from './service/Cart-Context';
import CarritoContainer from './components/CarritoContainer/CarritoContainer';
import DisplayCategoria from './components/DisplayCategoria/DisplayCategoria';
import DisplayMainView from './components/DisplayMainView/DisplayMainView';
import FormDeCompra from './components/FormDeCompra/FormDeCompra';
import OrdenesContainer from './components/OrdenesContainer/OrdenesContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <DisplayMainView />
            </Route>
            <Route exact path="/productos/:categoria">
              <DisplayCategoria />
            </Route>
            <Route exact path="/productos/:categoria/:id">
              <ItemInfoContainer />
            </Route>
            <Route exact path="/carrito">
              <CarritoContainer />
            </Route>
            <Route exact path="/confirmandoCompra">
              <FormDeCompra />
            </Route>
            <Route exact path="/ordenes/:id">
              <OrdenesContainer />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;