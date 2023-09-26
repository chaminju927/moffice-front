import './App.css';
import ModalComponent from './components/ModalComponent';
import Table1Component from './components/Table1Component';
import Table2Component from './components/Table2Component';

const App: React.FC = () => {
  return (
    <div className="App">
      <Table1Component />
      <Table2Component />
      {/* <ModalComponent /> */}
    </div>
  );
}

export default App;
