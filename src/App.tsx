import "./App.css";
import ModalComponent from "./components/ModalComponent";
import Table1Component from "./components/Table1Component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Table1Component} />
        {/* <Route path="/" Component={Table2Component} /> */}
        <Route path="/new" Component={ModalComponent} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Table1Component />
    //   <Table2Component />
    //   {/* <ModalComponent /> */}
    // </div>
  );
};

export default App;
