import "./App.css";
import ModalComponent from "./components/ModalComponent";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainComponent} />
        <Route path="/new" Component={ModalComponent} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
