import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { store } from "./redux/store";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
