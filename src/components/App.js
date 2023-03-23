import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Items from "./Items/Items";
import Order from "./Order/Order";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/items" element={<Items/>} />
        <Route path="/order" element={<Order/>} />

      </Routes>
    </div>
  );
}

export default App;
