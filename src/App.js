import './App.css';
import VendingMachine from './VendingMachine';

import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FreshSardines from './FreshSardines';
import Soda from './Soda';
import Chips from './Chips';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <VendingMachine exact path="/">
            <VendingMachine />
          </VendingMachine>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/freshsardines">
            <FreshSardines />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
