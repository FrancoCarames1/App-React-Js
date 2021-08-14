import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./components/FontAwesomeIcons";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemInfoContainer from './components/ItemInfo/ItemInfoContainer';
import {CartProvider} from './service/Cart-Context';
import CarritoContainer from './components/CarritoContainer/CarritoContainer';
import DisplayCategoria from './components/DisplayCategoria/DisplayCategoria';
import DisplayMainView from './components/DisplayMainView/DisplayMainView';
import FormDeCompra from './components/FormDeCompra/FormDeCompra';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Switch>
          <main>
            <Route exact path="/">
              <DisplayMainView/>
            </Route>
            <Route exact path="/productos/:categoria">
                <DisplayCategoria/>
            </Route>
            <Route exact path="/productos/:categoria/:id">
              <ItemInfoContainer/>
            </Route>
            <Route exact path="/carrito">
              <CarritoContainer/>
            </Route>
            <Route exact path="/confirmandoCompra">
              <FormDeCompra/>
            </Route>
          </main>
        </Switch>  
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;