import './App.css'
import {Route, Routes} from "react-router-dom";
import Catalog from "./views/Catalog/Catalog";
import Cart from "./views/Cart/Cart";
import Button from "./component/Button/Button";
function App() {
  return (
    <div className="App">
        <header className='App-header'>
            <Button/>
        </header>
        <Routes>
            <Route path={'/'} element={<Catalog/>}></Route>
            <Route path={'/cart'} element={<Cart/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
