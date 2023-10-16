import "./css/index.css";
import ModalComponent from "./components/ModalComponent";
import MainComponent from "./components/MainComponent";
import NavComponent from "./components/NavComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<MainComponent />} />
        <Route path="/new" element = {<ModalComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
