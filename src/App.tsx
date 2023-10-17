import "./css/index.css";
import ModalComponent from "./components/ModalComponent";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/new" element={<ModalComponent />} />
        <Route path="/workTrip" element={<MainComponent />} />
        <Route path="/calendar" element={<MainComponent />} />
        <Route path="/vacation" element={<MainComponent />} />
        <Route path="/ot" element={<MainComponent />} />
        <Route path="/pcOnOff" element={<MainComponent />} />
        <Route path="/vacant" element={<MainComponent />} />
        <Route path="/notice" element={<MainComponent />} />
        <Route path="/flexible" element={<MainComponent />} />
        <Route path="/telecommute" element={<MainComponent />} />
        <Route path="/workstate" element={<MainComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
